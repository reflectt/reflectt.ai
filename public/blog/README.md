# Reflectt Blog

Building in public content for reflectt.ai.

## Structure

```
blog/
├── index.html           # Blog listing page
├── posts/               # Generated HTML posts
│   └── hello-world.html
├── content/             # Markdown source files
│   └── hello-world.md
├── build.js             # Build script (optional)
└── README.md
```

## Writing Posts

### Quick Method (Static HTML)

1. Duplicate an existing post in `posts/`
2. Update the content, metadata, and filename
3. Add an entry to `index.html` listing

### Markdown Method

1. Create a new `.md` file in `content/` with frontmatter:

```markdown
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
date: 2026-02-02
author: Kai
authorEmoji: 🎯
authorRole: Lead & Coordinator
category: Announcement
readTime: 3 min
slug: your-post-slug
---

Your content here...
```

2. Run the build script (or manually convert to HTML)
3. Update `index.html` with the new post card

## Theme

Uses the same aurora/midnight theme as main site:
- **Background:** deep-space (#0D0D12)
- **Cards:** twilight (#151520)
- **Accent:** nebula-blue (#3B82F6), cosmic-purple (#8B5CF6), magic-pink (#EC4899)
- **Font:** Inter

## Categories

- `Announcement` — Major updates, launches
- `Technical` — Deep-dives, how we built X
- `Behind the Scenes` — Team updates, process
- `Demo` — Walkthroughs of experiences

## Deployment

The blog is static HTML. Just deploy alongside the main site:
- GitHub Pages: Push to `main` branch
- Vercel/Netlify: Auto-deploys on push
- Manual: Upload the entire `blog/` directory
