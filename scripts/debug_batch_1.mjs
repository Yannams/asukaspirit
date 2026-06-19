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

console.log(`Total nodes: ${uniqueNodes.length}`);
const batch1 = uniqueNodes.slice(0, 100);
console.log('Batch 1 IDs:', batch1.map(n => n.id));

// Test calling them individually or in smaller batches to find which one is bad
async function testIds() {
  // Let's test calling them 10 at a time
  for (let i = 0; i < batch1.length; i += 10) {
    const slice = batch1.slice(i, i + 10);
    const ids = slice.map(n => encodeURIComponent(n.id)).join(',');
    const url = `https://api.figma.com/v1/images/${fileKey}?ids=${ids}&format=png`;
    const res = await fetch(url, { headers: { 'X-Figma-Token': token } });
    if (!res.ok) {
      console.log(`Slice ${i} to ${i+10} FAILED: Status ${res.status}`);
      // Find the specific bad ID in this slice
      for (const node of slice) {
        const singleUrl = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(node.id)}&format=png`;
        const singleRes = await fetch(singleUrl, { headers: { 'X-Figma-Token': token } });
        if (!singleRes.ok) {
          const text = await singleRes.text();
          console.log(`  ID: ${node.id} (${node.name}) FAILED: ${singleRes.status} - ${text}`);
        }
      }
    } else {
      console.log(`Slice ${i} to ${i+10} OK`);
    }
  }
}

testIds();
