#!/bin/bash
set -e

echo "🔧 Building Next.js project..."
npm run build

echo "📁 Setting up output directory..."
mkdir -p out/files
mkdir -p out/_next

echo "📋 Copying headers..."
cp public/_headers out/ || true

echo "📄 Copying PDFs..."
cp -r public/files/* out/files/ || true

echo "✅ Build complete!"
ls -la out/files/
