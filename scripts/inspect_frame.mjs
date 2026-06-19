import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'figma_data.json');
if (!fs.existsSync(dataPath)) {
  console.error('figma_data.json introuvable.');
  process.exit(1);
}

const targetFrameId = process.argv[2] || '122:323'; // Par défaut 'Acceuil'
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Recherche récursive du nœud
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

// Recherche dans document ou directement s'il s'agit d'un noeud unique
let targetNode = null;
if (data.document) {
  targetNode = findNode(data.document, targetFrameId);
} else if (data.nodes) {
  for (const nodeData of Object.values(data.nodes)) {
    if (nodeData.document) {
      targetNode = findNode(nodeData.document, targetFrameId);
      if (targetNode) break;
    }
  }
}

if (!targetNode) {
  console.error(`Nœud avec l'ID ${targetFrameId} introuvable.`);
  process.exit(1);
}

console.log(`=== INSPECTION DU NŒUD : ${targetNode.name} (${targetNode.type}, ID: ${targetNode.id}) ===`);
if (targetNode.layoutMode) {
  console.log(`AutoLayout : Mode = ${targetNode.layoutMode}, Alignement = ${targetNode.primaryAxisAlignItems}/${targetNode.counterAxisAlignItems}`);
  console.log(`Padding : T=${targetNode.paddingTop}, R=${targetNode.paddingRight}, B=${targetNode.paddingBottom}, L=${targetNode.paddingLeft}`);
  console.log(`Espacement : ${targetNode.itemSpacing}`);
}

function dumpTree(node, depth = 0) {
  const indent = '  '.repeat(depth);
  let info = '';
  if (node.type === 'TEXT') {
    info = ` - "${node.characters.replace(/\n/g, ' ')}"`;
  } else if (node.type === 'INSTANCE') {
    info = ` (Composant ID: ${node.componentId})`;
  } else if (node.type === 'FRAME') {
    info = node.layoutMode ? ` [AutoLayout: ${node.layoutMode}]` : ' [Absolute]';
  }
  
  console.log(`${indent}* [${node.type}] ${node.name} (ID: ${node.id})${info}`);
  
  if (node.children && depth < 3) { // Limiter la profondeur pour ne pas saturer
    node.children.forEach(child => dumpTree(child, depth + 1));
  } else if (node.children && node.children.length > 0) {
    console.log(`${indent}  ... (${node.children.length} enfants supplémentaires cachés)`);
  }
}

dumpTree(targetNode);
