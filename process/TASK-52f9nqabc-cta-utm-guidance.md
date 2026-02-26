# Task 52f9nqabc — Canonical CTA + UTM Guidance

## Summary
Updated reflectt.ai CTAs to forward UTM params and added attribution guidance.

## PR
- reflectt/reflectt.ai PR #21 (commit `6220d70`)

## Changes
| File | Change |
|------|--------|
| `app/components/UtmLink.tsx` | New client component — reads UTM from URL, forwards to CTA href |
| `app/page.tsx` | Hero + bottom CTA use UtmLink; secondary CTA → GitHub |
| `app/layout.tsx` | Nav CTA uses UtmLink; footer UTM guidance section added |

## Before/After

### Hero CTA (before)
```html
<a href="https://app.reflectt.ai">Get started with Reflectt Cloud</a>
<a href="https://forAgents.dev">Explore forAgents.dev →</a>
```

### Hero CTA (after)
```html
<UtmLink href="https://app.reflectt.ai">Get started with Reflectt Cloud</UtmLink>
<a href="https://github.com/reflectt/reflectt-node">View on GitHub →</a>
```

### Footer UTM guidance (new)
```
Share link: https://reflectt.ai
Supported UTM parameters: utm_source, utm_medium, utm_campaign, utm_term, utm_content
Example: reflectt.ai?utm_source=twitter&utm_medium=social&utm_campaign=launch
```

## How UtmLink works
1. User arrives at `reflectt.ai?utm_source=twitter&utm_campaign=launch`
2. UtmLink reads `useSearchParams()` and extracts UTM keys
3. When user clicks CTA, link becomes `app.reflectt.ai?utm_source=twitter&utm_campaign=launch`
4. Signup flow captures UTMs in `raw_user_meta_data` (PR #214)

## Build
`next build` passes — all routes statically prerendered.
