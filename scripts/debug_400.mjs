import fs from 'fs';
import path from 'path';

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

const data = JSON.parse(fs.readFileSync('figma_data.json', 'utf8'));
const nodesToDownload = [];

function checkNode(node) {
  let isImageCandidate = false;
  if (node.fills && Array.isArray(node.fills)) {
    const hasImageFill = node.fills.some(fill => fill.type === 'IMAGE');
    if (hasImageFill) isImageCandidate = true;
  }
  const name = node.name ? node.name.toLowerCase() : '';
  if (
    name.includes('screenshot') ||
    name.includes('upscaled') ||
    name.includes('photo') ||
    name.includes('shot') ||
    /^\d+/.test(name) ||
    name.startsWith('calque') ||
    name.startsWith('fichier') ||
    name.startsWith('group')
  ) {
    if (node.type === 'RECTANGLE' || node.type === 'VECTOR' || node.type === 'COMPONENT' || node.type === 'INSTANCE' || node.type === 'BOOLEAN_OPERATION') {
      isImageCandidate = true;
    }
  }
  if (isImageCandidate) {
    nodesToDownload.push({ id: node.id, name: node.name });
  }
  if (node.children) {
    node.children.forEach(checkNode);
  }
}

if (data.document) {
  checkNode(data.document);
} else if (data.nodes) {
  for (const nodeData of Object.values(data.nodes)) {
    if (nodeData.document) checkNode(nodeData.document);
  }
}

const uniqueNodes = [];
const seenIds = new Set();
for (const node of nodesToDownload) {
  if (!seenIds.has(node.id)) {
    seenIds.add(node.id);
    uniqueNodes.push(node);
  }
}

console.log(`Total nodes unique: ${uniqueNodes.length}`);

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function findBadIds() {
  const badIds = [];
  const goodIds = [];

  for (let i = 0; i < uniqueNodes.length; i++) {
    const node = uniqueNodes[i];
    
    // Attendre 1 seconde entre chaque requête pour éviter le 429
    await delay(1000);

    const url = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(node.id)}&format=png`;
    try {
      const res = await fetch(url, { headers: { 'X-Figma-Token': token } });
      if (!res.ok) {
        const text = await res.text();
        console.log(`Node ${i}/${uniqueNodes.length} - ID: ${node.id} (${node.name}) FAILED with ${res.status}: ${text}`);
        badIds.push({ id: node.id, name: node.name, status: res.status, error: text });
      } else {
        const json = await res.json();
        const imgUrl = json.images[node.id];
        if (!imgUrl) {
          console.log(`Node ${i}/${uniqueNodes.length} - ID: ${node.id} (${node.name}) - Succeeded but returned NULL url.`);
          badIds.push({ id: node.id, name: node.name, error: 'No image URL returned' });
        } else {
          goodIds.push(node.id);
        }
      }
    } catch (e) {
      console.log(`Node ${i}/${uniqueNodes.length} - ID: ${node.id} (${node.name}) THREW: ${e.message}`);
      badIds.push({ id: node.id, name: node.name, error: e.message });
    }
  }

  console.log('=== RAPPORT FINAL ===');
  console.log(`Total Good IDs: ${goodIds.length}`);
  console.log(`Total Bad IDs: ${badIds.length}`);
  console.log('Liste des Bad IDs:', JSON.stringify(badIds, null, 2));
}

findBadIds();
