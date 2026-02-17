# Technology Stack

**Project:** Personal Portfolio (current repo)
**Researched:** 2026-02-16

## Current Stack (from package.json)

| Technology | Version (package.json) | Purpose | Recommendation |
|---|---|---:|---|
| React | ^18.2.0 | UI library | Keep — modern and supported (HIGH confidence)
| react-router-dom | ^6.22.3 | Client routing | Keep for SPA routing; if migrating to Next.js, move to file-based routing (MEDIUM confidence)
| styled-components | ^6.1.8 | Component-scoped CSS | Keep as primary styling solution — already in use and good for component encapsulation (HIGH confidence)
| react-bootstrap + bootstrap | ^2.x / ^5.x | Layout & utilities | Remove or de-duplicate: using both styled-components and Bootstrap creates cognitive overhead; choose one primary approach. For maintainability, prefer styled-components + utility CSS (MEDIUM confidence)
| react-icons | ^5.4.0 | Icons | Keep — lightweight and simple (HIGH confidence)
| react-scripts | 5.0.1 | Create React App build | Consider migrating to Vite for faster dev and smaller builds if you plan larger changes (LOW→MEDIUM confidence)

## Recommended Additions
- Image optimization pipeline: sharp-based build or Next/Image if migrating (MEDIUM confidence)
- Accessibility tooling: axe (eslint-plugin-jsx-a11y, jest-axe) (HIGH confidence)
- Testing: @testing-library/react + jest — project already has testing libraries listed but no tests present. Add basic smoke tests (HIGH confidence)
- Analytics: Plausible or Google Analytics, depending on privacy goals (MEDIUM confidence)
- Deployment: Vercel/Netlify for fast previews; GitHub Actions for CI (HIGH confidence)

## Alternatives Considered
- Full SSG/SSR (Next.js) — Recommended when SEO & social previews matter; tradeoff: migration cost. Use if you're chasing organic traffic from search. (MEDIUM confidence)
- Component library (Chakra UI / Mantine / MUI) — Easier to build accessible components quickly, but increases dependency footprint. Use if you want consistent primitives and faster dev. (MEDIUM confidence)

## Installation (developer convenience)

```bash
# keep current stack
npm install

# Dev: add a11y & test tooling
npm install -D eslint-plugin-jsx-a11y jest-axe @testing-library/jest-dom
```

## Sources
- Local repo: package.json and src/ files (HIGH confidence)
