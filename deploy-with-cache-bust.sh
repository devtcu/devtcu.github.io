#!/bin/bash

# Cache-busting deployment script for GitHub Pages
# This script will build your Next.js project and ensure assets are refreshed on GitHub Pages

echo "🚀 Starting cache-busting deployment..."

# Get current timestamp for cache busting
TIMESTAMP=$(date +%s)

# Build and export the project
echo "📦 Building your Next.js project..."
npm run export

# Add .nojekyll file to prevent GitHub Pages from using Jekyll
echo "🔧 Adding .nojekyll file..."
touch out/.nojekyll

# Add a timestamp file to force cache invalidation
echo "🕒 Adding timestamp for cache busting..."
echo "Last build: $(date)" > out/build-timestamp-$TIMESTAMP.txt

# Commit and push changes
echo "💾 Committing changes..."
git add out/
git commit -m "Deploy with cache busting: $(date)"

# Push to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
git subtree push --prefix out origin gh-pages

echo "✅ Deployment complete! Your site should be updated in a few minutes."
echo "🔗 Visit https://devtcu.github.io/personal-webpage/ to see your changes."
echo "Note: You might need to hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)."
