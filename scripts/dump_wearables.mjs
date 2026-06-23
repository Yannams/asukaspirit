import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'figma_data.json');
if (!fs.existsSync(dataPath)) {
  console.error('figma_data.json introuvable.');
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

function rgbToHex(r, g, b) {
  const toHex = c => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function dump(node, depth = 0) {
  const indent = '  '.repeat(depth);
  let info = `[${node.type}] ${node.name} (${node.id})`;
  
  if (node.characters) {
    info += ` text="${node.characters.replace(/\n/g, '\\n')}"`;
  }
  
  if (node.fills && node.fills.length > 0) {
    const solid = node.fills.filter(f => f.type === 'SOLID');
    if (solid.length > 0) {
      info += ` colors=[${solid.map(f => rgbToHex(f.color.r, f.color.g, f.color.b)).join(',')}]`;
    }
    const images = node.fills.filter(f => f.type === 'IMAGE');
    if (images.length > 0) {
      info += ` imageRef=${images[0].imageRef}`;
    }
  }
  
  if (node.absoluteBoundingBox) {
    const b = node.absoluteBoundingBox;
    info += ` bbox=[x:${Math.round(b.x)},y:${Math.round(b.y)},w:${Math.round(b.width)},h:${Math.round(b.height)}]`;
  }
  
  if (node.style) {
    info += ` style={fontFamily:"${node.style.fontFamily}",fontSize:${node.style.fontSize},fontWeight:${node.style.fontWeight},letterSpacing:${node.style.letterSpacing}}`;
  }
  
  console.log(indent + info);
  
  if (node.children) {
    node.children.forEach(c => dump(c, depth + 1));
  }
}

console.log('=== LUNETTES ===');
dump(findNode(data.document, '122:437'));
console.log('\n=== MONTRES ===');
dump(findNode(data.document, '122:461'));
