import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'figma_data.json');
if (!fs.existsSync(dataPath)) {
  console.error('figma_data.json introuvable.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

console.log('--- RESUME FIGMA ---');
console.log(`Nom du fichier : ${data.name}`);
console.log(`Dernière modification : ${data.lastModified}`);
console.log(`Version de l'API : ${data.version || 'non spécifiée'}`);

if (data.nodes) {
  console.log('\nNœuds trouvés :');
  for (const [id, nodeData] of Object.entries(data.nodes)) {
    console.log(`- ID: ${id}`);
    const doc = nodeData.document;
    if (doc) {
      console.log(`  Nom: ${doc.name}`);
      console.log(`  Type: ${doc.type}`);
      if (doc.children) {
        console.log(`  Enfants (${doc.children.length}) :`);
        doc.children.slice(0, 10).forEach(child => {
          console.log(`    * [${child.type}] ${child.name} (ID: ${child.id})`);
          if (child.children) {
            child.children.slice(0, 5).forEach(subChild => {
              console.log(`      - [${subChild.type}] ${subChild.name} (ID: ${subChild.id})`);
            });
            if (child.children.length > 5) {
              console.log(`      - ... et ${child.children.length - 5} autres`);
            }
          }
        });
        if (doc.children.length > 10) {
          console.log(`    * ... et ${doc.children.length - 10} autres`);
        }
      }
    } else {
      console.log(`  Aucun document trouvé pour ce nœud.`);
    }
  }
} else if (data.document) {
  console.log('\nStructure complète du document :');
  console.log(`Type : ${data.document.type}`);
  if (data.document.children) {
    data.document.children.forEach(page => {
      console.log(`Page: ${page.name} (ID: ${page.id})`);
      if (page.children) {
        page.children.slice(0, 15).forEach(child => {
          console.log(`  * [${child.type}] ${child.name} (ID: ${child.id})`);
        });
      }
    });
  }
} else {
  console.log('Structure inattendue du JSON.');
}
