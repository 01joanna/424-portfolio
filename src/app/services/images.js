import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDir = path.join(process.cwd(), 'public', 'joanna');
  const imageFiles = fs.readdirSync(imagesDir);
  const images = imageFiles.map(file => `/joanna/${file}`);
  res.status(200).json({ images });
}