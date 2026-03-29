# Reflectt.ai — Agent Handbook

## What This Repo Does

The public marketing website for Reflectt — "The Reality Mixer." It's a Next.js site (app directory) deployed to Vercel at **reflectt.ai**.

Not to be confused with:
- **reflectt-node** — the coordination server (agents talk to this)
- **reflectt-cloud** — the managed hosting platform (runs reflectt-node for users)

## Site Structure

```
reflectt.ai/
├── app/
│   ├── page.tsx           # Landing page (hero, demos, team)
│   ├── layout.tsx         # Root layout with nav/footer
│   ├── blog/              # Blog posts
│   ├── products/          # Product pages
│   ├── team/              # Team page
│   ├── privacy/           # Privacy policy
│   ├── case-study/        # Case studies
│   ├── work-with-us/      # Careers/openings
│   └── bootstrap/         # Bootstrap flow
├── public/
│   ├── demos/             # Experience demo videos/gifs
│   ├── magic/             # Magic demo page
│   ├── blog/              # Blog assets
│   └── screenshots/       # Product screenshots
└── components/            # Reusable React components
```

## Key Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero, value prop, demos, team |
| Magic | `/magic` | Watch experience demos |
| Products | `/products/*` | Individual product pages |
| Blog | `/blog/*` | Blog posts |
| Team | `/team` | Meet the agent team |

## For Agents

### What You Can Do Here
- **Content updates** — Edit blog posts, product pages, copy
- **Demo management** — Add/remove experience demos in `/magic`
- **Design tweaks** — Modify components, styles, tokens
- **OG cards** — Update social sharing images

### What You Cannot Do
- **Deploy** — Vercel deployment requires credentials (ask @kai or @link)
- **Analytics access** — Stats are behind Vercel auth
- **DNS changes** — Cloudflare controlled separately

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom design tokens
- **Deployment:** Vercel
- **Domain:** Cloudflare DNS

### Design Tokens
The site uses CSS custom properties in `app/tokens.css`. Key tokens:
- Colors: `--color-*` (brand, surface, text variants)
- Spacing: `--space-*`
- Typography: `--font-*`

### Running Locally

```bash
cd ~/reflectt.ai  # or workspace-link/reflectt.ai

# Development
npm run dev
# Opens http://localhost:3000

# Build for production
npm run build

# Export static (if needed)
npm run export
```

### Common Tasks

**Add a blog post:**
```bash
# Create: app/blog/my-post/page.tsx
# Add frontmatter + content
# Images go in public/blog/
```

**Update the hero:**
- Edit `app/page.tsx` — search for hero section
- Design tokens in `app/tokens.css`

**Add a demo to /magic:**
- Video/gif goes in `public/demos/`
- Add entry to the demos config or array in the page

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check `npm install` ran, clear `.next` and rebuild |
| Styles broken | Check Tailwind config and `app/globals.css` |
| Images not loading | Ensure in `public/` not `app/` |
| 404 on deploy | Check `vercel.json` routing rules |

## Deployment

Deployed automatically via Vercel on push to main. Manual deploy requires Vercel CLI or dashboard access.

```bash
# Via Vercel CLI (if authenticated)
vercel --prod
```

## Links

- **Live site:** https://reflectt.ai
- **Magic demos:** https://reflectt.ai/magic
- **Vercel dashboard:** https://vercel.com/reflectt
- **Cloudflare:** DNS and domain management
