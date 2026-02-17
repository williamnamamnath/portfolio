# Domain Pitfalls — Personal Portfolio (UI/UX focus)

**Domain:** Developer portfolio
**Researched:** 2026-02-16

## Critical Pitfalls

### Pitfall 1: Poor SEO due to client-side only rendering
**What goes wrong:** Pages load without pre-rendered meta tags and content; search engines and social previews may not index or render content properly.
**Why it happens:** Using CRA/react-scripts SPA without prerendering or SSG.
**Consequences:** Reduced discoverability, lower organic traffic.
**Prevention:** Use SSG/SSR (Next.js) or static prerendering for pages, or add server-side rendered meta tags via prerendering service. Add canonical meta, og:type and twitter cards.
**Detection:** Search console coverage, share link previews missing images or metadata (MEDIUM confidence)

### Pitfall 2: Accessibility gaps (non-semantic clickable elements)
**What goes wrong:** Users relying on keyboard/assistive tech can't navigate or trigger actions.
**Why it happens:** Using <div> or <a> without href and onClick handlers; missing aria attributes and keyboard handlers.
**Consequences:** Exclusion of users, negative recruiter perception.
**Prevention:** Use semantic elements (<button>, <a href>) and add aria-labels; run axe audits and fix violations.
**Detection:** Automated a11y tests and keyboard-only navigation audits (HIGH confidence)

### Pitfall 3: Styling inconsistency and maintenance debt
**What goes wrong:** Mixed styling strategies (styled-components + Bootstrap + inline mutations) produce inconsistent look and harder maintenance.
**Why it happens:** Evolving design choices and quick fixes.
**Consequences:** Slower feature additions, regressions across breakpoints.
**Prevention:** Pick a primary styling approach (recommend styled-components), extract design tokens, and refactor incrementally.
**Detection:** Duplicate CSS rules, visual regressions on updates (HIGH confidence)

## Moderate Pitfalls

### Pitfall: Large unoptimized images
**Prevention:** Use responsive srcset, WebP, lazy loading. Add a build step to convert assets.

### Pitfall: No tests or CI
**Prevention:** Add basic component tests and a GitHub Action to run them on PRs.

## Phase-Specific Warnings
| Phase Topic | Likely Pitfall | Mitigation |
|---|---|---|
| Accessibility fixes (Phase 1) | Missing keyboard focus states | Add focus-visible styles and test keyboard nav |
| SSG migration (Phase 3) | Time cost & regressions | Prototype migrating one page first; keep SPA build as fallback |
| Performance optimization | Image format regressions | Keep source originals and generate optimized outputs in build step |

## Sources
- Repo inspection (HIGH confidence)
- Accessibility & SEO best practices (industry norms — MEDIUM confidence)
