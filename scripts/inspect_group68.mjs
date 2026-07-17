import fs from 'fs';
const data = JSON.parse(fs.readFileSync('figma_data.json', 'utf8'));

function findNode(node, name) {
  if (node.name && node.name === name) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNode(child, name);
      if (found) return found;
    }
  }
  return null;
}

const g68 = findNode(data.document || Object.values(data.nodes)[0]?.document, 'Group 68');
console.log('Group 68 Details:', JSON.stringify(g68, null, 2));
