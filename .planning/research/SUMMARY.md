# Research Summary: Personal Portfolio (William Nam-Amnath)

**Domain:** Personal developer portfolio (React SPA)
**Researched:** 2026-02-16
**Overall confidence:** MEDIUM (codebase facts HIGH; market/competitor comparisons MEDIUM)

## Executive Summary

This portfolio is a conventional React single-page application (SPA) built with React 18, react-router-dom, styled-components, and Bootstrap utilities. It contains the expected pages (Home, About, Projects, Experience) and per-project pages. The codebase is small, component-focused, and straightforward to iterate on.

Compared to other developer portfolios in the market, it sits near the median: it has polished visuals and a clear information hierarchy, but it lacks several features that distinguish top-tier portfolios — SEO friendliness (because it's a client-rendered SPA), structured project case studies, accessibility best practices, automated tests, and analytics/monitoring.

Primary opportunities: improve project case studies, standardize the styling approach, fix accessibility issues (semantic elements and ARIA), optimize images and performance, and optionally migrate to an SSG/SSR approach (Next.js or static export) if SEO is a priority.

## Key Findings
- Stack: React + react-router-dom + styled-components + react-bootstrap (from package.json) — CONFIDENCE: HIGH
- Feature surface: Home, Projects carousel, per-project pages, About, Experience, NavBar, Footer — CONFIDENCE: HIGH
- Gaps vs. high-performing portfolios: SEO/SSG, structured case studies with metrics, accessibility, performance optimization, testing & CI — CONFIDENCE: MEDIUM
- Maintenance risk: mixed styling (styled-components + inline styles + Bootstrap classes) and clickable non-semantic elements — CONFIDENCE: HIGH

## Implications for Roadmap (phase suggestions)

1. Foundation (Week 0–1): Accessibility & semantic fixes, replace clickable divs with buttons/links, keyboard focus states, add aria-labels. Rationale: low effort, high UX lift; prevents exclusion. (Addresses PITFALLS: accessibility)

2. Project polish (Week 1–2): Convert project pages into case studies (problem, approach, tech, outcome, links, metrics), add live demos/screens recordings, canonical links for sharing. Rationale: strongest resume signal to recruiters. (Addresses FEATURES: differentiators)

3. Performance & SEO (Week 2–3): Optimize images (WebP, srcset), add meta tags and structured data, consider SSG migration (Next.js/Vite + static export) if search visibility matters. Rationale: organic discoverability and faster load times. (ARCHITECTURE implication)

4. Quality & Observability (Week 3–4): Add basic tests (component smoke tests), analytics (privacy-friendly), error boundary, deploy pipeline with previews. Rationale: enables safe iterative changes. (STACK & PITFALLS)

Research flags for roadmap
- Phase 3 (SSG migration): needs feasibility research on SEO benefits vs. rebuild cost (MEDIUM confidence).
- Accessibility: run automated a11y scans during Phase 1 and track results (HIGH confidence).

## Confidence Assessment
| Area | Confidence | Notes |
|--|--:|--|
| Codebase characteristics | HIGH | Direct inspection of package.json and src/ files |
| UI/UX expectations vs. market | MEDIUM | Based on common portfolio patterns and recruiter expectations |
| SEO & SSG recommendation | MEDIUM | Trades implementation cost vs benefit; depends on goals |

## Gaps to Address
- External benchmarking: gather 6–8 competitor portfolios you want to emulate and extract patterns (calls-to-action, project depth, personal brand tone).
- Recruitment signal metrics: identify which metrics matter (time on page, click-to-email, GitHub link CTR).
