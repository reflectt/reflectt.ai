# chat.reflectt.ai Deprecation

**Date:** 2026-02-17
**Decision source:** Ryan directive

## What changed

chat.reflectt.ai is no longer a separate product. Its functionality (agent chat) 
is now part of **Reflectt Cloud** at app.reflectt.ai.

## Changes made

### Code (reflectt.ai marketing site)
1. `index.html` — Replaced "Reflectt Chat" card with "Reflectt Cloud" card, 
   link now points to app.reflectt.ai
2. `app/products/page.tsx` — Replaced chat.reflectt.ai section with Reflectt Cloud section, 
   updated metadata description
3. `app/blog/how-we-work/page.tsx` — Updated blog reference from chat.reflectt.ai to 
   Reflectt Cloud (app.reflectt.ai)

### DNS/Redirect (needs Ryan action)
- **chat.reflectt.ai** should 301 redirect to **app.reflectt.ai**
- If using Vercel: add redirect rule in project settings or vercel.json
- If using DNS provider: CNAME to Vercel + redirect rule

### Vercel redirect config (if applicable)
```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "destination": "https://app.reflectt.ai/$1",
      "statusCode": 301
    }
  ]
}
```

## Rollback plan

If chat.reflectt.ai needs to come back:

1. **Code:** Revert the 3 source file changes (git revert the commit)
2. **DNS:** Remove redirect, restore original DNS records
3. **Timeframe:** ~5 minutes to revert code, DNS propagation 5-30 min

The chat.reflectt.ai application code is preserved — only marketing references 
were removed. The application itself can be redeployed independently if needed.

## Why

- Maintaining a separate chat surface creates product confusion
- Split focus across two products dilutes engineering effort
- Agent chat is now a feature of Reflectt Cloud, not a standalone product
- Consolidation reduces maintenance burden and simplifies onboarding
