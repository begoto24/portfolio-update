#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts images to WebP and generates responsive variants
 * 
 * INSTALLATION:
 * npm install --save-dev sharp
 * 
 * USAGE:
 * node scripts/optimize-images.js
 * 
 * Generates:
 * - Original image as reference
 * - .w400.webp (400px wide)
 * - .w800.webp (800px wide)
 * - .w1400.webp (1400px wide)
 * - .w400.jpg, .w800.jpg, .w1400.jpg (JPEG fallback)
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/assets/images');
const OUTPUT_DIR = path.join(__dirname, '../public/assets/images');
const WIDTHS = [400, 800, 1400];
const QUALITY = 75;

// Image metadata for accurate resizing
// maxWidth = maximum width we want to generate responsive variants for
const IMAGE_SPECS = {
  'project-2.jpg': { maxWidth: 1400, name: 'E-Commerce' },
  'project-4.jpg': { maxWidth: 1400, name: 'Flashcards' },
  'project-5.jpg': { maxWidth: 1400, name: 'Task-Flow' },
  'project-3.jpg': { maxWidth: 1400, name: 'Gestion RH' },
  'profil.jpg': { maxWidth: 1000, name: 'Profile' },
  'project-1.jpg': { maxWidth: 1000, name: 'E-School' },
  'project-6.jpg': { maxWidth: 1400, name: 'Auth-G-email' },
  'about.jpg': { maxWidth: 800, name: 'About' },
  'stofilajout.jpeg': { maxWidth: 800, name: 'About - en presentation' },
};

async function optimizeImage(filename) {
  const inputPath = path.join(INPUT_DIR, filename);
  const spec = IMAGE_SPECS[filename];

  if (!spec) {
    console.warn(`⚠️  Skipping ${filename} - no spec defined`);
    return;
  }

  console.log(`📸 Processing ${filename} (${spec.name})...`);

  for (const width of WIDTHS) {
    if (width > spec.maxWidth) {
      console.log(`  ⏭️  Skipping ${width}px (exceeds max ${spec.maxWidth}px)`);
      continue;
    }

    const baseName = filename.replace(/\.[^/.]+$/, '');

    // Generate WebP
    const webpPath = path.join(OUTPUT_DIR, `${baseName}.w${width}.webp`);
    await sharp(inputPath)
      .resize(width, undefined, { withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    console.log(`  ✅ Created ${baseName}.w${width}.webp`);

    // Generate JPEG fallback
    const jpegPath = path.join(OUTPUT_DIR, `${baseName}.w${width}.jpg`);
    await sharp(inputPath)
      .resize(width, undefined, { withoutEnlargement: true })
      .jpeg({ quality: QUALITY })
      .toFile(jpegPath);
    console.log(`  ✅ Created ${baseName}.w${width}.jpg`);
  }
}

async function main() {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`❌ Input directory not found: ${INPUT_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(INPUT_DIR).filter(
    (f) => /\.(jpg|jpeg|png)$/i.test(f) && !/\.w\d+\.(jpg|jpeg|png)$/i.test(f)
  );
  
  if (files.length === 0) {
    console.warn('⚠️  No images found in', INPUT_DIR);
    return;
  }

  console.log(`🚀 Starting image optimization for ${files.length} images...\n`);

  for (const file of files) {
    try {
      await optimizeImage(file);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log('\n✨ Image optimization complete!');
}

// Run main
main().catch(console.error);
