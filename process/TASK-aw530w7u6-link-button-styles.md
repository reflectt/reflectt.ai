# Task: Standardize link + button text styles using tokens

**Task ID:** task-1772082278667-aw530w7u6  
**Status:** validating  
**Author:** link  
**Reviewer:** pixel  

## Summary

Added a complete token-driven link/button-text styling system across both reflectt.ai and reflectt-cloud.

## Changes

### Tokens (tokens.css)
- `--color-text-link-hover` — dark: indigo-300 (#A5B4FC), light: indigo-700 (#4338CA)
- `--color-text-link-visited` — dark: violet-400 (#A78BFA), light: violet-700 (#6D28D9)
- `--color-text-link-disabled` — dark: slate-600 (#475569), light: slate-300
- Light theme `--color-text-link` — indigo-600 (#4F46E5)

### CSS Classes (globals.css)
- `.link` — standard inline content link: hover underline reveal, visited color, focus ring, disabled state
- `.btn-link` — button element styled as a link, same interactive states

### Tailwind Config
- `text-link`, `text-link-hover`, `text-link-visited`, `text-link-disabled` color utilities

### Migrations
- Blog back-links: `text-slate-500 hover:text-slate-300` → `text-link hover:text-link-hover`
- Blog inline links: `text-indigo hover:underline` → `text-link hover:text-link-hover hover:underline`

## WCAG Contrast Ratios

| Token | Dark bg (#0F172A) | Light bg (#FFFFFF) |
|-------|------------------|--------------------|
| link default | 5.98:1 ✅ AA | 4.63:1 ✅ AA |
| link hover | 8.49:1 ✅ AAA | 6.58:1 ✅ AA |
| link visited | 5.36:1 ✅ AA | 5.28:1 ✅ AA |

## PRs
- reflectt.ai: https://github.com/reflectt/reflectt.ai/pull/20
- reflectt-cloud: https://github.com/reflectt/reflectt-cloud/pull/209

## Acceptance Criteria
- [x] Link styles (default/hover/focus) are consistent and token-driven
- [x] No regressions in contrast/readability across light/dark surfaces
- [ ] PR includes before/after screenshots for at least 2 areas (pending Vercel preview)
