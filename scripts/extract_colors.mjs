import fs from 'fs';

const data = JSON.parse(fs.readFileSync('figma_data.json', 'utf8'));
const colors = new Set();

function rgbToHex(r, g, b) {
  const toHex = c => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function traverse(node) {
  if (node.fills && Array.isArray(node.fills)) {
    node.fills.forEach(fill => {
      if (fill.type === 'SOLID' && fill.color) {
        colors.add(rgbToHex(fill.color.r, fill.color.g, fill.color.b));
      }
    });
  }
  if (node.strokes && Array.isArray(node.strokes)) {
    node.strokes.forEach(stroke => {
      if (stroke.type === 'SOLID' && stroke.color) {
        colors.add(rgbToHex(stroke.color.r, stroke.color.g, stroke.color.b));
      }
    });
  }
  if (node.children) {
    node.children.forEach(traverse);
  }
}

if (data.document) {
  traverse(data.document);
} else if (data.nodes) {
  for (const nodeData of Object.values(data.nodes)) {
    if (nodeData.document) traverse(nodeData.document);
  }
}

console.log('Couleurs trouvées dans Figma :');
console.log(Array.from(colors).sort());
