import fs from 'fs';
import path from 'path';

// Next.js n'étant pas démarré, nous chargeons manuellement le fichier .env.local
// en lisant le fichier s'il existe.
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      // Retirer les guillemets éventuels
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value.trim();
    }
  });
}

const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
const fileKey = process.env.FIGMA_FILE_KEY;
const nodeId = process.env.FIGMA_NODE_ID;

if (!token || token === 'VOTRE_TOKEN_ICI') {
  console.error('Erreur : Veuillez renseigner votre FIGMA_PERSONAL_ACCESS_TOKEN dans le fichier .env.local.');
  process.exit(1);
}

if (!fileKey) {
  console.error('Erreur : FIGMA_FILE_KEY est manquant dans le fichier .env.local.');
  process.exit(1);
}

console.log(`Connexion à Figma pour le fichier : ${fileKey}...`);
let url = `https://api.figma.com/v1/files/${fileKey}`;
if (nodeId) {
  url += `?ids=${nodeId}`;
}

try {
  const response = await fetch(url, {
    headers: {
      'X-Figma-Token': token,
    },
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Erreur API Figma (${response.status}) : ${errText}`);
  }

  const data = await response.json();
  console.log('Connexion réussie !');
  console.log(`Nom du projet Figma : ${data.name}`);
  console.log(`Dernière modification : ${data.lastModified}`);
  
  // Sauvegarder les données brutes dans figma_data.json pour l'utiliser lors de la génération de composants
  const outputPath = path.join(process.cwd(), 'figma_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Les données du design ont été sauvegardées dans : figma_data.json`);

} catch (error) {
  console.error('Échec de la récupération du design :', error.message);
}
