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

// Les nœuds clés identifiés dans le design pour nos pages
const targetNodes = [
  { id: "122:355", name: "presentation_video" },
  { id: "245:724", name: "revo_corp_laptop" },
  { id: "268:1115", name: "revo_free_laptop" },
  { id: "122:438", name: "lunettes_connectees" },
  { id: "427:528", name: "montres_connectees_hero" },
  { id: "464:686", name: "montres_connectees_collection" },
  { id: "464:721", name: "as_watch_2_argent" },
  { id: "464:730", name: "as_watch_3_tactique" },
  { id: "517:722", name: "as_watch_1_sport" },
  { id: "122:496", name: "dr_asuka_atelier" },
  { id: "361:419", name: "vision_asuka_spirit" },
  { id: "277:1227", name: "revo_free_shango_hero" },
  { id: "277:1228", name: "revo_free_shango_laptop" },
  { id: "304:1396", name: "revo_free_fifa_laptop" },
  { id: "394:621", name: "revo_corp_1_desktop" },
  { id: "400:629", name: "revo_corp_1_desktop_alt" },
  { id: "419:467", name: "revo_corp_2_laptop" }
];

const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Fichier index/registre pour associer les nœuds aux fichiers téléchargés
let imagesRegistry = {};
const registryPath = path.join(process.cwd(), 'public', 'images_registry.json');
if (fs.existsSync(registryPath)) {
  try {
    imagesRegistry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  } catch (e) {
    imagesRegistry = {};
  }
}

async function downloadFile(url, dest) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Échec de téléchargement: ${response.statusText}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(dest, buffer);
}

async function main() {
  console.log(`Récupération des rendus Figma pour ${targetNodes.length} images clés...`);
  
  // Joindre tous les IDs
  const ids = targetNodes.map(n => encodeURIComponent(n.id)).join(',');
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=${ids}&format=png&scale=2`;
  
  try {
    const res = await fetch(url, {
      headers: { 'X-Figma-Token': token }
    });
    
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Erreur API Figma (${res.status}) : ${txt}`);
    }
    
    const result = await res.json();
    const imagesMap = result.images || {};
    
    for (const node of targetNodes) {
      const imgUrl = imagesMap[node.id];
      if (imgUrl) {
        const fileName = `${node.name}_${node.id.replace(/:/g, '_')}.png`;
        const destPath = path.join(imagesDir, fileName);
        
        console.log(`Téléchargement de [${node.name}] (${node.id}) -> public/images/${fileName}...`);
        try {
          await downloadFile(imgUrl, destPath);
          imagesRegistry[node.id] = {
            name: node.name,
            fileName: `/images/${fileName}`
          };
        } catch (downloadErr) {
          console.error(`Échec du téléchargement pour ${node.name}:`, downloadErr.message);
        }
      } else {
        console.warn(`Aucun rendu d'image disponible pour le nœud ${node.id} (${node.name})`);
      }
    }
    
    // Sauvegarder le registre mis à jour
    fs.writeFileSync(registryPath, JSON.stringify(imagesRegistry, null, 2), 'utf8');
    console.log(`Registre d'images enregistré dans public/images_registry.json !`);
    console.log('Téléchargement terminé avec succès.');
    
  } catch (err) {
    console.error('Échec de la récupération des images :', err.message);
  }
}

main();
