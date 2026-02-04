#!/usr/bin/env node
/**
 * Simple blog build script
 * Converts markdown files in content/ to HTML in posts/
 * 
 * Usage: node build.js
 * 
 * Requires: npm install marked gray-matter
 */

const fs = require('fs');
const path = require('path');

// Check for dependencies
let marked, matter;
try {
  marked = require('marked');
  matter = require('gray-matter');
} catch (e) {
  console.log('Dependencies not installed. Run:');
  console.log('  npm install marked gray-matter');
  console.log('\nOr manually create HTML files in posts/');
  process.exit(0);
}

const CONTENT_DIR = path.join(__dirname, 'content');
const POSTS_DIR = path.join(__dirname, 'posts');

// Ensure posts directory exists
if (!fs.existsSync(POSTS_DIR)) {
  fs.mkdirSync(POSTS_DIR, { recursive: true });
}

// HTML template
const template = (data, content) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title} | Reflectt Blog</title>
  <meta name="description" content="${data.description}">
  
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://reflectt.ai/blog/posts/${data.slug}.html">
  <meta property="og:title" content="${data.title}">
  <meta property="og:description" content="${data.description}">
  <meta property="article:published_time" content="${data.date}">
  <meta property="article:author" content="${data.author}">
  
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="canonical" href="https://reflectt.ai/blog/posts/${data.slug}.html">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'deep-space': '#0D0D12',
            'twilight': '#151520',
            'nebula-blue': '#3B82F6',
            'cosmic-purple': '#8B5CF6',
            'magic-pink': '#EC4899',
          },
          fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Inter', system-ui, sans-serif; }
    .gradient-text { background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    @keyframes pulse-glow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
    .pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
    .prose { color: #d1d5db; line-height: 1.8; }
    .prose h2 { color: #fff; font-weight: 700; font-size: 1.5rem; margin-top: 2.5rem; margin-bottom: 1rem; }
    .prose h3 { color: #fff; font-weight: 600; font-size: 1.25rem; margin-top: 2rem; margin-bottom: 0.75rem; }
    .prose p { margin-bottom: 1.25rem; }
    .prose a { color: #3B82F6; text-decoration: underline; }
    .prose a:hover { color: #60a5fa; }
    .prose strong { color: #fff; font-weight: 600; }
    .prose code { color: #EC4899; background: rgba(236, 72, 153, 0.1); padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.875em; }
    .prose pre { background: #151520; border: 1px solid rgba(255,255,255,0.1); border-radius: 0.5rem; padding: 1rem; overflow-x: auto; margin: 1.5rem 0; }
    .prose pre code { background: none; padding: 0; color: #d1d5db; }
    .prose ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
    .prose ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
    .prose li { margin-bottom: 0.5rem; }
    .prose blockquote { border-left: 4px solid #8B5CF6; padding-left: 1rem; margin: 1.5rem 0; color: #9ca3af; font-style: italic; }
    .prose hr { border-color: rgba(255,255,255,0.1); margin: 2rem 0; }
  </style>
</head>
<body class="bg-deep-space text-white min-h-screen">
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-blue/10 rounded-full blur-3xl pulse-glow"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-3xl pulse-glow" style="animation-delay: 2s;"></div>
  </div>

  <nav class="relative z-10 flex items-center justify-between px-6 sm:px-8 py-6 max-w-7xl mx-auto">
    <a href="/" class="flex items-center gap-3">
      <svg width="32" height="32" viewBox="0 0 200 200"><defs><linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3B82F6"/><stop offset="100%" stop-color="#8B5CF6"/></linearGradient></defs><rect x="55" y="40" width="32" height="120" rx="6" fill="url(#logoGrad)"/><rect x="113" y="40" width="32" height="120" rx="6" fill="url(#logoGrad)"/></svg>
      <span class="text-xl font-semibold">Reflectt</span>
    </a>
    <div class="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
      <a href="/" class="text-gray-400 hover:text-white transition">Home</a>
      <a href="/magic" class="text-gray-400 hover:text-white transition">Demos</a>
      <a href="/blog" class="text-white font-medium">Blog</a>
    </div>
  </nav>

  <main class="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pt-8 sm:pt-12 pb-20">
    <a href="/blog" class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      Back to Blog
    </a>

    <header class="mb-10">
      <div class="flex items-center gap-3 text-sm text-gray-500 mb-4">
        <span class="px-2 py-1 bg-cosmic-purple/20 text-cosmic-purple rounded-full text-xs font-medium">${data.category}</span>
        <time datetime="${data.date}">${new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>· ${data.readTime}</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">${data.title}</h1>
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-nebula-blue to-cosmic-purple flex items-center justify-center text-lg">${data.authorEmoji}</div>
        <div>
          <div class="font-medium">${data.author}</div>
          <div class="text-sm text-gray-500">${data.authorRole}</div>
        </div>
      </div>
    </header>

    <article class="prose max-w-none">
      ${content}
    </article>

    <div class="mt-12 pt-8 border-t border-white/10">
      <a href="/blog" class="text-gray-400 hover:text-white transition">← All posts</a>
    </div>
  </main>

  <footer class="relative z-10 border-t border-white/5 mt-20">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-gray-500 text-sm">Created by <a href="https://twitter.com/rycamjamz" class="text-gray-400 hover:text-white">@rycamjamz</a> and AI agents at <a href="https://openclaw.ai" class="text-gray-400 hover:text-white">OpenClaw</a></p>
    </div>
  </footer>
</body>
</html>`;

// Process all markdown files
const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
console.log(`Found ${files.length} markdown file(s)`);

files.forEach(file => {
  const filepath = path.join(CONTENT_DIR, file);
  const raw = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(raw);
  
  const html = marked.parse(content);
  const output = template(data, html);
  
  const outPath = path.join(POSTS_DIR, `${data.slug}.html`);
  fs.writeFileSync(outPath, output);
  console.log(`Built: ${data.slug}.html`);
});

console.log('Done!');
