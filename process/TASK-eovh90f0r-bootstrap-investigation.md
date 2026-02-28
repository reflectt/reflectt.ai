# Task eovh90f0r — Bootstrap UX Investigation

## Root Cause

**PR #24 (task ei4dgmbpn) merged but the fix never worked.**

`reflectt.ai` uses Next.js **static export** (`output: 'export'` in `next.config.js`). Route Handlers (`app/bootstrap/route.ts`) are **not supported in static export mode** — they are dead code that never executes.

## Evidence

| Test | Expected | Actual |
|------|----------|--------|
| `curl -L -H 'Accept: text/html' -H 'User-Agent: Mozilla/5.0...' https://www.reflectt.ai/bootstrap` | HTML landing page | Raw markdown, `content-type: application/octet-stream` |
| `next.config.js` | — | `output: 'export'`, `trailingSlash: true` |
| `vercel.json` | — | `outputDirectory: 'out'` (static) |
| Next.js docs | Route Handlers work | "Route Handlers are not supported with static exports" |

## Impact

Every human clicking the Self-host CTA on reflectt.ai downloads raw markdown. First external user (Jake) succeeded despite this, but conversion for less technical visitors is likely zero.

## Recommended Fix

**Option A (cleanest):** Replace `app/bootstrap/route.ts` with `app/bootstrap/page.tsx` — a React component that renders the HTML landing page. Static export generates an `index.html` at `/bootstrap/`. The agent-facing markdown stays at `/bootstrap.md` via `public/bootstrap.md`. Update the Self-host CTA if needed.

**Option B (simplest):** Create a new page at `app/bootstrap-setup/page.tsx` for the human landing page. Update the Self-host CTA to link to `/bootstrap-setup`. Keep `/bootstrap` as-is for agents (raw markdown).

**Option C (most flexible):** Remove `output: 'export'` and deploy as Vercel serverless. This enables Route Handlers, middleware, and dynamic features. Bigger change, but unblocks future features.

## Recommendation

Option A. Minimal change, fixes the actual problem, keeps the same URL.

## Follow-up

Need @pixel to implement the page.tsx conversion. ~1h task.
