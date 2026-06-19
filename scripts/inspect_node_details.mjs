import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'figma_data.json');
if (!fs.existsSync(dataPath)) {
  console.error('figma_data.json introuvable.');
  process.exit(1);
}

const targetFrameId = process.argv[2];
if (!targetFrameId) {
  console.error('Veuillez fournir un ID de nœud.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

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

function rgbToHex(r, g, b) {
  const toHex = c => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function printNodeDetails(node, depth = 0) {
  const indent = '  '.repeat(depth);
  console.log(`${indent}=== [${node.type}] ${node.name} (ID: ${node.id}) ===`);
  
  if (node.absoluteBoundingBox) {
    const box = node.absoluteBoundingBox;
    console.log(`${indent}Position/Taille : X=${Math.round(box.x)}, Y=${Math.round(box.y)}, W=${Math.round(box.width)}, H=${Math.round(box.height)}`);
  }
  
  if (node.fills && node.fills.length > 0) {
    const solidFills = node.fills.filter(f => f.type === 'SOLID');
    if (solidFills.length > 0) {
      const hexes = solidFills.map(f => rgbToHex(f.color.r, f.color.g, f.color.b));
      console.log(`${indent}Fills (Couleurs) : ${hexes.join(', ')}`);
    }
    const imgFills = node.fills.filter(f => f.type === 'IMAGE');
    if (imgFills.length > 0) {
      console.log(`${indent}Fills : Contient des images (Réf: ${imgFills.map(f => f.imageRef).join(', ')})`);
    }
  }
  
  if (node.type === 'TEXT') {
    console.log(`${indent}Texte : "${node.characters}"`);
    if (node.style) {
      const s = node.style;
      console.log(`${indent}Style Texte : Font=${s.fontFamily}, Taille=${s.fontSize}px, Graisse=${s.fontWeight}, Align=${s.textAlignHorizontal}`);
    }
  }
  
  if (node.layoutMode) {
    console.log(`${indent}AutoLayout : Mode=${node.layoutMode}, Espace=${node.itemSpacing}, Padding=[T:${node.paddingTop}, R:${node.paddingRight}, B:${node.paddingBottom}, L:${node.paddingLeft}]`);
  }
  
  if (node.children) {
    console.log(`${indent}Enfants (${node.children.length}) :`);
    node.children.forEach(child => {
      // Pour les enfants, on affiche un résumé ou on descend s'il s'agit de groupes/frames de mise en page
      if (child.type === 'GROUP' || child.type === 'FRAME' || child.type === 'INSTANCE' || child.type === 'TEXT') {
        printNodeDetails(child, depth + 1);
      } else {
        console.log(`${indent}  - [${child.type}] ${child.name} (ID: ${child.id})`);
      }
    });
  }
}

printNodeDetails(targetNode);
