import fs from 'fs';
const data = JSON.parse(fs.readFileSync('figma_data.json', 'utf8'));

function findNodeByName(node, name) {
  if (node.name && node.name.toLowerCase().includes(name.toLowerCase())) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeByName(child, name);
      if (found) return found;
    }
  }
  return null;
}

const logo = findNodeByName(data.document || Object.values(data.nodes)[0]?.document || data, 'logo');
if (logo) {
  console.log('Logo node found:', logo.type, logo.name, logo.id);
  if (logo.absoluteBoundingBox) {
    console.log('  bbox:', logo.absoluteBoundingBox);
  }
} else {
  console.log('Logo not found.');
}
