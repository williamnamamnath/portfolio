# Portfolio UI/UX Roadmap — Focused, phased plan

Created: 2026-02-16
Author: gsd-planner (based on .planning/research/*)

Overview
--------
This roadmap focuses on incremental, high-impact UI/UX improvements for the personal portfolio: (1) accessibility & semantic fixes, (2) convert Projects into case studies, (3) performance & SEO (including an SSG spike), and (4) quality & CI with minimal tests. Each phase is designed to be small PRs (<=1 week) for a single developer working ~20 hours/week.

Phasing summary (high-level)
- Phase 01 — Foundation: Accessibility & semantic cleanup — 3–5 days
- Phase 02 — Project Case Studies: convert 3 project pages into case studies — 5–7 days
- Phase 03 — Performance & SEO + SSG spike: image pipeline, meta, SSG prototype — 5–9 days
- Phase 04 — Quality & Observability: tests, CI, analytics, preview deploys — 3–5 days

Notes: Prioritize low-effort, high-impact tasks first (a11y fixes, case studies, image optimizations). Keep PRs small and focused so each can be reviewed and merged in <1 week.

Phase 01 — Foundation: Accessibility & semantic fixes
---------------------------------------------------
Timeline estimate: 3–5 days (1 dev, 20h/week => ~0.5–1 week)

Goal / success criteria
- All interactive elements use semantic HTML (no clickable divs for primary actions).
- Keyboard navigation works across header/nav, project cards, and mobile menu.
- No critical a11y violations on automated scan (axe) — reduce critical/serious by 80% from baseline.

Why this first
- Low effort, very high UX and recruiter signal (addresses PITFALL 2). Fixes also reduce regressions for later phases.

Features / tasks (granular)
- Task 1: Replace non-semantic clickable elements in navigation and mobile menu
  - Files: src/components/NavBar.js, src/components/MobileNavbar.js
  - Action: Ensure links are <a href="..."> or <button> where appropriate; add aria-expanded, aria-controls for menus; ensure menu items are keyboard-focusable. Avoid role="button" on divs unless unavoidable. Add unit of keyboard event handling for Enter/Space.
  - Verify: Keyboard tab through nav; Enter/Space activates; `npm run lint -- --report` (eslint-plugin-jsx-a11y) shows no new a11y errors.
  - Done: Navigation usable via keyboard, no clickable divs remain in nav components.

- Task 2: Make Project tiles accessible and add descriptive alt text for images
  - Files: src/pages/ProjectsPage.js, src/projects/*.js, src/components/ProjectCard.js (if exists) or create ProjectCard component at src/components/ProjectCard.js
  - Action: Ensure project previews use <article> or <li> semantics, images have meaningful alt text, links use <a href> to project details, add aria-labels where links are icon-only. Add visible focus styles (or rely on .focus-visible if present in GlobalStyles.js / custom-styles.css).
  - Verify: Manual keyboard navigation to project tile, image alt text present, `npx axe-core` or jest-axe reports no critical missing alt errors.
  - Done: All project tiles are keyboard-accessible and images include alt text.

- Task 3: Add focus-visible styles and small accessibility tooling
  - Files: src/GlobalStyles.js, src/custom-styles.css, package.json (devDependencies update)
  - Action: Add focus-visible CSS rules (outline for keyboard focus), install eslint-plugin-jsx-a11y and add config to ESLint, add a simple npm script `npm run a11y:check` using axe-core/puppeteer or axe-cli. If tests are already present, add jest-axe as a dev dependency.
  - Verify: `npm run a11y:check` runs and reports issues (expect no critical/serious). ESLint a11y plugin passes on modified files.
  - Done: Focus styles present; basic automated a11y check available.

Dependencies & ordering rationale
- Phase 01 is independent and should run first. It removes accessibility blockers that could cause regressions in later UI changes.

Estimated effort & confidence
- Effort: 3–5 person-days
- Confidence: HIGH (codebase facts: high; tasks are small edits)

Risks & mitigations (links to PITFALLS)
- Risk: Missing keyboard states or overlooked non-semantic elements (PITFALL 2). Mitigation: run automated axe audits and a short keyboard-only manual pass for nav and projects. Keep small PRs per area.

Acceptance tests / verification
- Run `npm run a11y:check` (axe) against the homepage and projects page (expect critical issues <= 0).
- Manual: keyboard-only navigation for header, mobile menu, and project tiles — document any remaining gaps.
- Lint: eslint-plugin-jsx-a11y reports zero new errors in changed files.

Checklist — files to modify/create (Phase 01)
- Modify: src/components/NavBar.js, src/components/MobileNavbar.js, src/pages/ProjectsPage.js, src/GlobalStyles.js, src/custom-styles.css
- Create (if not present): src/components/ProjectCard.js
- DevDeps: package.json add eslint-plugin-jsx-a11y, jest-axe or axe-cli

---

Phase 02 — Project Case Studies (convert projects into recruiter-friendly narratives)
--------------------------------------------------------------------------
Timeline estimate: 5–7 days (convert 3 project pages into case studies; 1 developer, ~1 week)

Goal / success criteria
- Each of 3 priority projects has a case study page with: Problem, Approach, Tech stack, Outcome (metrics or qualitative), Links (live, repo), 3–6 screenshots or GIFs, and canonical metadata.
- Recruiter-friendly: each case study fits a 2–3 minute read and includes a clear CTA to view code or contact.

Why this second
- High recruiter impact and low-to-medium effort. Converts lightweight project pages into persuasive artifacts (FEATURES.md recommendation).

Features / tasks (granular)
- Task 1: Create ProjectCaseStudy component and template
  - Files: src/components/ProjectCaseStudy.js, src/styles/CaseStudy.module.css or styled-component in same file
  - Action: Create a reusable template that accepts props: title, date, role, problem, approach, outcome, tech[], imgs[], links[]. Use semantic sections (<header>, <section>, <figure>, <aside>). Include metadata (meta tags) via react-helmet or update route-level head management.
  - Verify: Rendering story / smoke test; manual check for correct structure.
  - Done: Template exists and is used by at least one project page.

- Task 2: Migrate three existing project pages to the case study template
  - Files: src/projects/MovieNight.js, src/projects/NFIB.js, src/projects/Emporium.js (pick top 3; swap if different projects are priority)
  - Action: Replace current project page content with case study data using the template. Add images/screenshots already in src/images and host optimized variants (see Phase 3). Add metadata (title, description, canonical) per page.
  - Verify: Manual review of each case study page; links to repo/live work present; each page includes Problem→Approach→Outcome sections.
  - Done: 3 case studies live behind their routes, each with metadata.

- Task 3: Add shareable metadata and canonical link for each case study
  - Files: src/pages/<project>.js (the pages modified), optionally src/seo.js helper or use react-helmet in component
  - Action: Add title, meta description, og:image, twitter:card. Ensure each case study sets a canonical URL.
  - Verify: Inspect head (browser devtools) and share preview on Twitter Debugger or Social Preview tool (local emulation OK).
  - Done: Social preview picks up case-study title + image.

Dependencies & ordering rationale
- Phase 02 depends on Phase 01 completion for improved accessibility on new pages and consistent templating. Case study template must be created before migrating individual project pages.

Estimated effort & confidence
- Effort: 5–7 person-days
- Confidence: MEDIUM (content work depends on writing and finding metrics; code work is low)

Risks & mitigations
- Risk: Missing outcome metrics for older projects. Mitigation: use qualitative outcomes and measurable signals (link clicks, demos) as fallback. (See FEATURES.md)
- Risk: Styling inconsistencies (PITFALL 3). Mitigation: Use styled-components template and local CSS module for case study to avoid global regressions.

Acceptance tests / verification
- Manual review: each case-study page includes required sections and metadata.
- Link check: each repo/live link opens and is correct.
- Smell test: run accessibility check on case study pages (from Phase 01 scripts).

Checklist — files to modify/create (Phase 02)
- Create: src/components/ProjectCaseStudy.js, src/styles/CaseStudy.module.css (or use styled-components in the component)
- Modify: src/projects/MovieNight.js, src/projects/NFIB.js, src/projects/Emporium.js (content → case-study usage)
- Modify: src/pages/ProjectsPage.js (if it links to project case-studies) to point at new routes

---

Phase 03 — Performance & SEO (image pipeline, meta, SSG spike)
----------------------------------------------------------------
Timeline estimate: 5–9 days (includes an SSG spike/prototype)

Goal / success criteria
- Faster LCP/CLS improvement: reduce largest contentful paint and image payloads on project and home pages; images delivered in responsive formats (WebP/AVIF) with srcset.
- Meta coverage: all case-study pages include meta tags, structured data (JSON-LD) for projects, and social preview images.
- SSG spike: prototype migrating one case-study page to a static-rendered route (Next.js or static prerender) and measure build + preview; decision: proceed or defer.

Why this third
- Improves perceived performance and SEO; SSG spike reduces long-term risk (addresses PITFALL 1). Image optimizations have immediate impact and are low effort.

Features / tasks (granular)
- Task 1: Add responsive image component and convert project images
  - Files: src/components/Image.js, modify used files: src/projects/*.js, src/pages/Home.js (hero image)
  - Action: Create a small Image wrapper that outputs <img srcset> with WebP fallback and lazy loading. Add blur-up / placeholder if feasible. Locally generate optimized images into /public/images/optimized (or a build folder) using a sharp-based npm script (e.g., `scripts: "build:images": "node scripts/optimize-images.js"`).
  - Verify: Page network panel shows WebP or smaller images in srcset; Lighthouse image savings reported.
  - Done: Image component used across hero and project pages; optimized assets present in repo or generated at build.

- Task 2: Add basic SEO improvements and project JSON-LD
  - Files: src/seo.js (new helper) or add to ProjectCaseStudy component, modify src/pages/_app or Layout to include defaults
  - Action: Add canonical, title templates, meta description, og and twitter meta tags. Add structured JSON-LD for each case study (project name, description, url, image, datePublished). Provide a small util to generate meta from case study props.
  - Verify: Inspect page source / devtools for meta tags; run structured data testing tools manually or via online Rich Results Test.
  - Done: Case study pages include metadata and JSON-LD.

- Task 3 (Spike): SSG/Prerender prototype for one case study
  - Files: Create a minimal prototype in /ssg-spike/ (README + Next.js app scaffold) or add a `scripts/ssg-prototype/` folder with instructions and minimal code migrating one case study page.
  - Action: Spin up a one-page Next.js static page (or use prerender build) that renders one case study as static HTML with correct meta and optimized image, measure build size and preview behavior. Document findings: time to migrate full site estimate, benefits to SEO, and recommended path (migrate vs keep CRA + prerender service).
  - Verify: Prototype builds and serves a static HTML page with meta and renders correctly. Produce short Spike report (1–2 pages) in .planning/research/SSG-SPIKE.md.
  - Done: Spike report with recommendation: migrate / delay / hybrid approach.

Dependencies & ordering rationale
- Image optimizations should be applied before Phase 04 CI/perf gating. SSG spike is independent but informs long-term architecture decisions; do it before larger rearchitect work.

Estimated effort & confidence
- Effort: 5–9 person-days (Image pipeline ~2 days, SEO/meta ~1–2 days, SSG spike ~2–5 days depending on depth)
- Confidence: MEDIUM (SSG benefits depend on goals; image work is high-confidence)

Risks & mitigations
- Risk: Image format regressions or missing originals (PITFALL: Large unoptimized images). Mitigation: keep source originals in src/images, write scripts that output optimized variants and keep originals untouched. Add tests to verify srcset generated.
- Risk: SSG spike consumes time. Mitigation: keep spike minimal (one page) and stop after measurable criteria (build time and preview quality) are gathered.

Acceptance tests / verification
- Lighthouse / PageSpeed: measure image payload savings and LCP improvement on Home + one case study page.
- Inspect head for meta and JSON-LD.
- SSG spike: prototype builds and serves static HTML; spike report committed to .planning/research/SSG-SPIKE.md.

Checklist — files to modify/create (Phase 03)
- Create: src/components/Image.js, scripts/optimize-images.js, .planning/research/SSG-SPIKE.md (spike report)
- Modify: src/pages/Home.js (hero image), src/projects/* case study pages to use Image.js, src/components/ProjectCaseStudy.js (add meta generation hook), package.json scripts for `build:images` and `ssg:prototype`.

---

Phase 04 — Quality & Observability: Tests, CI, preview deploys
-----------------------------------------------------------
Timeline estimate: 3–5 days

Goal / success criteria
- Small suite of automated checks runs on every PR: component smoke tests (3–5 tests), lint, and a11y check. PRs have preview builds (Vercel/Netlify) and GitHub Actions run on push.

Why this fourth
- Provides safety for iterative changes and enables small PRs. Low initial investment with high payoff.

Features / tasks (granular)
- Task 1: Add minimal tests and run in CI
  - Files: tests/components/NavBar.test.js, tests/components/ProjectCaseStudy.test.js, jest.config.js, package.json (test script)
  - Action: Add @testing-library/react + jest, write simple smoke tests that render NavBar and ProjectCaseStudy and assert no crashes and presence of key text. Add jest-axe test to assert no critical a11y violations for rendered components.
  - Verify: `npm test` passes locally for new tests.
  - Done: Tests run and pass.

- Task 2: Add GitHub Action for PRs (lint, test, a11y script, build)
  - Files: .github/workflows/ci.yml
  - Action: Create a CI workflow that runs on pull_request: checks out code, installs deps, runs lint, `npm run a11y:check`, `npm test`, and `npm run build` (or `npm run build --if-present`). Configure artifact upload for test results if desired.
  - Verify: Open a test PR to see the workflow run (or run on branch). Workflow completes successfully.
  - Done: CI runs on PRs and fails early on regressions.

- Task 3: Add preview deploy instructions and minimal analytics
  - Files: .github/workflows/deploy-preview.yml (optional) or document Vercel connect in README; src/lib/analytics.js (small Plausible or GA wrapper)
  - Action: Configure Vercel/Netlify preview deploys (document steps in README). Add simple privacy-first analytics (Plausible) snippet behind env var.
  - Verify: PR preview available and analytics event sends (manual check).
  - Done: Preview deploys work for PRs and analytics stub added.

Dependencies & ordering rationale
- Phase 04 depends on Phases 01–03 for stable components, case studies, and image handling. Tests should run against the improved components.

Estimated effort & confidence
- Effort: 3–5 person-days
- Confidence: HIGH for basic tests & CI; MEDIUM for full observability integration

Risks & mitigations
- Risk: CI flakiness and slow runs. Mitigation: keep tests small (smoke tests), run a11y/lint in Node only, avoid end-to-end tests initially. If longer runs appear, gate a11y to nightly job.

Acceptance tests / verification
- Open PR and verify GitHub Action runs and passes. Verify tests and a11y checks run in CI. Confirm preview deploy URL loads.

Checklist — files to modify/create (Phase 04)
- Create: tests/components/NavBar.test.js, tests/components/ProjectCaseStudy.test.js, .github/workflows/ci.yml
- Modify: package.json (scripts: test, a11y:check, build:images), README.md (preview deploy instructions)

Roadmap-level ordering & dependencies (summary)
- Wave 1: Phase 01 (a11y fixes) — independent, must run first to avoid regressions.
- Wave 2: Phase 02 (case studies) — depends on Phase 01 for accessible templates.
- Wave 3: Phase 03 (performance & SEO + SSG spike) — depends on Phase 02 (images used in case studies) but spike may run in parallel if preferred.
- Wave 4: Phase 04 (CI & tests) — should run after Phases 01–03 provide stable components to test, though CI workflow can be added earlier with an empty test suite.

Estimates & resourcing guidance
- Assumption: single developer, ~20 hours/week (part-time). Keep PRs <= 1 week of work. The timeline above assumes sequential flow but tasks within phases can be split into small PRs (navigation fixes, project card fixes, one case-study at a time, image component + conversion of each image).

Overall estimated total (rough)
- 16–26 person-days (approx 3–6 calendar weeks at 20h/week depending on overlap and PR cadence).

Confidence levels
- Accessibility & tests: HIGH
- Case studies & image work: MEDIUM→HIGH
- SSG migration value: MEDIUM (requires spike to confirm)

Risks (roadmap-level) and mitigations
- PITFALL 1 (SEO): SPA has SEO limits — mitigation: SSG spike, metadata improvements, and canonical tags. If SEO is primary goal, plan a full migration after spike.
- PITFALL 2 (a11y): Non-semantic elements — mitigation: Phase 01 and eslint-plugin-jsx-a11y to catch regressions.
- PITFALL 3 (styling inconsistency): Mixed styled-components + Bootstrap — mitigation: keep refactors local to components; new components use styled-components and tokens in GlobalStyles.

Acceptance criteria for roadmap completion
- Phase 01–04 each have passing acceptance checks defined above.
- At least 3 project pages converted to case studies and linked from Projects listing.
- Image pipeline in place producing WebP variants for hero and project images with srcset in place.
- CI runs on PRs with lint, test, and a11y checks; at least 3 smoke tests present.

Deliverables & artifacts to commit
- .planning/research/SSG-SPIKE.md (spike report)
- src/components/ProjectCaseStudy.js, src/components/Image.js, src/components/ProjectCard.js (or modifications), src/components/ProjectCaseStudy.js
- tests and .github/workflows/ci.yml

Immediate next PR recommendations (small, high-impact)
1. PR #1 (Phase 01): Accessibility fixes for NavBar + MobileNavbar + focus-visible styles — small, reviewable, high impact.
2. PR #2 (Phase 02): Add ProjectCaseStudy template and convert one project (MovieNight) into a case study.
3. PR #3 (Phase 03): Add src/components/Image.js and a small `build:images` script that outputs WebP variants for hero image.

Path of the roadmap file
.planning/roadmap/ROADMAP.md

---
Appendix: Links to research used
- .planning/research/SUMMARY.md
- .planning/research/STACK.md
- .planning/research/FEATURES.md
- .planning/research/ARCHITECTURE.md
- .planning/research/PITFALLS.md
