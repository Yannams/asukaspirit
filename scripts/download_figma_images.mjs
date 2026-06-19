import fs from 'fs';
import path from 'path';

// Charger le fichier .env.local
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value.trim();
    }
  });
}

const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
const fileKey = process.env.FIGMA_FILE_KEY;

if (!token || token === 'VOTRE_TOKEN_ICI') {
  console.error('Erreur : Veuillez renseigner votre FIGMA_PERSONAL_ACCESS_TOKEN dans le fichier .env.local.');
  process.exit(1);
}

if (!fileKey) {
  console.error('Erreur : FIGMA_FILE_KEY est manquant dans le fichier .env.local.');
  process.exit(1);
}

const dataPath = path.join(process.cwd(), 'figma_data.json');
if (!fs.existsSync(dataPath)) {
  console.error('figma_data.json introuvable. Veuillez d\'abord lancer npm run fetch-design.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Trouver récursivement tous les nœuds suspects (rectangles, vecteurs ou instances contenant des images ou avec des noms d'images)
const nodesToDownload = [];

function checkNode(node) {
  let isImageCandidate = false;

  // 1. Vérifier si le nœud possède un fill de type IMAGE
  if (node.fills && Array.isArray(node.fills)) {
    const hasImageFill = node.fills.some(fill => fill.type === 'IMAGE');
    if (hasImageFill) {
      isImageCandidate = true;
    }
  }

  // 2. Vérifier les noms caractéristiques (screenshot, upscaled, photos, chiffres/noms spécifiques)
  const name = node.name ? node.name.toLowerCase() : '';
  if (
    name.includes('screenshot') ||
    name.includes('upscaled') ||
    name.includes('photo') ||
    name.includes('shot') ||
    /^\d+/.test(name) || // commence par un chiffre (ex: 00001, 10002, 20004)
    name.startsWith('calque') ||
    name.startsWith('fichier') ||
    name.startsWith('group')
  ) {
    // Si c'est un rectangle, un vecteur ou un composant
    if (node.type === 'RECTANGLE' || node.type === 'VECTOR' || node.type === 'COMPONENT' || node.type === 'INSTANCE' || node.type === 'BOOLEAN_OPERATION') {
      isImageCandidate = true;
    }
  }

  if (isImageCandidate) {
    if (!node.id.includes(';')) {
      nodesToDownload.push({
        id: node.id,
        name: node.name || `node_${node.id}`,
        type: node.type
      });
    }
  }

  if (node.children) {
    node.children.forEach(checkNode);
  }
}

// Analyser l'arbre
if (data.document) {
  checkNode(data.document);
} else if (data.nodes) {
  for (const nodeData of Object.values(data.nodes)) {
    if (nodeData.document) checkNode(nodeData.document);
  }
}

// Supprimer les doublons d'ID
const uniqueNodes = [];
const seenIds = new Set();
for (const node of nodesToDownload) {
  if (!seenIds.has(node.id)) {
    seenIds.add(node.id);
    uniqueNodes.push(node);
  }
}

console.log(`Trouvé ${uniqueNodes.length} nœuds candidats pour les images.`);

if (uniqueNodes.length === 0) {
  console.log('Aucune image identifiée.');
  process.exit(0);
}

// Découper en lots de 15 pour éviter de surcharger l'API Figma
const batchSize = 15;
const batches = [];
for (let i = 0; i < uniqueNodes.length; i += batchSize) {
  batches.push(uniqueNodes.slice(i, i + batchSize));
}

// S'assurer que le dossier public/images existe
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Fichier index/registre pour associer les nœuds aux fichiers téléchargés
const imagesRegistry = {};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function downloadFile(url, dest) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Échec de téléchargement: ${response.statusText}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(dest, buffer);
}

console.log(`Récupération des URLs de rendu pour ${uniqueNodes.length} images (découpées en ${batches.length} lots)...`);

for (let i = 0; i < batches.length; i++) {
  if (i > 0) {
    console.log(`Attente de 6 secondes avant le lot ${i + 1}/${batches.length} (Rate Limit)...`);
    await delay(6000);
  }
  const batch = batches[i];
  const ids = batch.map(n => encodeURIComponent(n.id)).join(',');
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=${ids}&format=png&scale=2`;

  try {
    const res = await fetch(url, {
      headers: { 'X-Figma-Token': token }
    });

    if (!res.ok) {
      console.error(`Erreur lors de la requête du lot ${i + 1}: ${res.statusText}`);
      continue;
    }

    const result = await res.json();
    const imagesMap = result.images || {};

    for (const node of batch) {
      const imgUrl = imagesMap[node.id];
      if (imgUrl) {
        // Nettoyer le nom de fichier
        const sanitizedName = node.name
          .replace(/[^a-zA-Z0-9_-]/g, '_')
          .replace(/_+/g, '_')
          .toLowerCase();
        
        const fileName = `${sanitizedName}_${node.id.replace(/:/g, '_')}.png`;
        const destPath = path.join(imagesDir, fileName);

        console.log(`Téléchargement de [${node.name}] -> public/images/${fileName}...`);
        try {
          await downloadFile(imgUrl, destPath);
          imagesRegistry[node.id] = {
            name: node.name,
            fileName: `/images/${fileName}`
          };
        } catch (downloadErr) {
          console.error(`Échec du téléchargement pour ${node.name}:`, downloadErr.message);
        }
      }
    }
  } catch (err) {
    console.error(`Erreur sur le lot ${i + 1}:`, err.message);
  }
}

// Enregistrer le registre des images pour que Next.js sache à quoi correspondent les IDs
fs.writeFileSync(
  path.join(process.cwd(), 'public', 'images_registry.json'),
  JSON.stringify(imagesRegistry, null, 2),
  'utf8'
);

console.log('Registre d\'images enregistré dans public/images_registry.json !');
console.log('Téléchargement terminé.');
