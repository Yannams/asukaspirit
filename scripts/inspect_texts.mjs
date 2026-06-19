import fs from 'fs';

const data = JSON.parse(fs.readFileSync('figma_data.json', 'utf8'));

function findNode(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNode(child, id);
      if (found) return found;
    }
  }
  return null;
}

const targetFrameId = process.argv[2] || '178:88'; // Par défaut le Footer

let footerNode = null;
if (data.document) {
  footerNode = findNode(data.document, targetFrameId);
} else if (data.nodes) {
  for (const nodeData of Object.values(data.nodes)) {
    if (nodeData.document) {
      footerNode = findNode(nodeData.document, targetFrameId);
      if (footerNode) break;
    }
  }
}

if (!footerNode) {
  console.error(`Nœud ${targetFrameId} introuvable`);
  process.exit(1);
}

function printTexts(node) {
  if (node.type === 'TEXT') {
    console.log(`- "${node.characters}" (ID: ${node.id})`);
  }
  if (node.children) {
    node.children.forEach(printTexts);
  }
}

console.log('Textes dans le Footer :');
printTexts(footerNode);
