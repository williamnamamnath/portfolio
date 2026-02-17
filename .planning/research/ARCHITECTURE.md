# Architecture: Portfolio comparison perspective

**Domain:** Personal portfolio SPA
**Researched:** 2026-02-16

## Current architecture (observed)
- Client-rendered React SPA using react-router-dom; pages under `src/pages/`, components under `src/components/`. Styling mixed between styled-components and Bootstrap CSS. No server-side rendering or CMS.

## How this compares to other portfolios

- Common modern portfolios (top tier) often use SSG/SSR frameworks (Next.js) for SEO, faster initial paint, and out-of-the-box image optimization. This repo is a pure client SPA — faster to develop but weaker for SEO and social previews (MEDIUM confidence).
- Many portfolios centralize theme and design tokens; this repo uses GlobalStyles (styled-components) which is a good foundation. However mixed use of Bootstrap classes and inline dynamic styles reduces consistency (HIGH confidence).
- Testing and CI: leading portfolios include tests and preview deploys (Vercel/Netlify) for PRs. This repo has testing deps but no tests and no CI config — common for early personal sites (MEDIUM confidence).

## Recommended component boundaries for next phase

| Component | Responsibility | Notes |
|---|---|---|
| Layout | Top-level layout, header/nav, footer | Keep in `src/components/Layout.js` and wrap Routes
| Nav | Navigation, mobile menu | Move stateful mobile menu logic into Nav context if needed
| ProjectCard | Reusable project preview | Accepts props: title, brief, image, tags, link
| ProjectCaseStudy | Full page: problem, approach, outcome, artifacts | Convert existing `src/projects/*` into this shape
| Image | Responsive image wrapper | Adds srcset, lazy loading, placeholder (blur-up)

## Data & content strategy
- Current: projects are code components with static content. Consider switching to a content-first approach: markdown or headless CMS (Markdown files in /content or Git-based CMS like Netlify CMS) to ease editing and reuse (MEDIUM confidence).

## Integration points
- Analytics (Plausible/GA)
- CI: GitHub Actions for tests and preview builds
- Deployment: Vercel/Netlify for static hosting

## When to consider re-architecture
- If SEO / organic discoverability is a goal → consider migrating to Next.js with static export or SSG for project pages (cost: moderate). If the site is primarily a shareable portfolio for recruiters via links, staying SPA is acceptable (MEDIUM confidence).

---

*Architecture analysis: 2026-02-16* — Codebase facts HIGH confidence; market tradeoffs MEDIUM confidence
