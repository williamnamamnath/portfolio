# Architecture

**Analysis Date:** 2026-02-16

## Pattern Overview

**Overall:** Single‑page React application (client rendered) with component + page separation.

**Key Characteristics:**
- Routing handled client-side via `react-router-dom` (`src/App.js`).
- UI is composed of page-level views in `src/pages/` and reusable components in `src/components/`.
- Styling uses a mix of `styled-components` and Bootstrap CSS (`react-bootstrap` + `bootstrap/dist/css/bootstrap.min.css`).
- Static assets (images, icons, favicon) are in `src/images/` and `public/`.

## Layers

**Presentation / Pages:**
- Purpose: full-screen routes and page composition
- Location: `src/pages/`
- Contains: `Home.js`, `AboutMe.js`, `ProjectsPage.js`, `Experience.js`, `ErrorPage.js` (`src/pages/Home.js`, etc.)
- Depends on: components in `src/components/`, images in `src/images/`
- Used by: router in `src/App.js`

**Reusable UI Components:**
- Purpose: visual building blocks used across pages
- Location: `src/components/`
- Contains: `NavBar.js`, `MobileNavbar.js`, `Footer.js`, `ScrollToTop.js` (`src/components/NavBar.js`, etc.)
- Depends on: `styled-components` (see `src/components/NavBar.js`) and `react-icons`
- Used by: pages and `src/App.js`

**Feature / Project Pages:**
- Purpose: project-detail pages and project cards
- Location: `src/projects/`
- Contains: `Checkit.js`, `NFIB.js`, `Emporium.js`, `MovieNight.js` (`src/projects/*.js`)
- Pattern: each project is a standalone React component routed from `src/App.js`

**Styling & Global CSS:**
- Purpose: global site theming and utility classes
- Location: `src/GlobalStyles.js` (styled-components global style) and `src/custom-styles.css`
- Notes: Bootstrap utilities are used inline in JSX via className; custom global styles are applied in `src/GlobalStyles.js`.

**Assets / Public:**
- `src/images/` - project and UI images (ex: `src/images/profile-picture.jpg`)
- `public/` - `index.html`, favicon, `manifest.json`

## Data Flow

User navigation flow (high level):

1. Browser loads `public/index.html` → `src/index.js` mounts `App`.
2. `src/App.js` registers routes with `react-router-dom` and renders `NavBar`, `Footer`, `GlobalStyles`.
3. Route change (link or programmatic `useNavigate`) renders a page component from `src/pages/` which composes `src/components/`.

State management:
- Local component state via React hooks (`useState`, `useEffect`) only (examples: `src/components/NavBar.js`, `src/pages/Home.js`).
- No global state library detected (Redux, Zustand, Context providers) — state is page/component scoped.

## Key Abstractions

**Pages**
- Purpose: route-level views. Examples: `src/pages/Home.js`, `src/pages/ProjectsPage.js`.

**Presentational Components**
- Purpose: styling + interaction encapsulation. Examples: `src/components/NavBar.js` (uses `styled-components`), `src/components/MobileNavbar.js`.

**Project Components**
- Purpose: represent each portfolio project. Examples: `src/projects/NFIB.js`, `src/projects/Emporium.js`.

## Entry Points

**Application mount:**
- `src/index.js` — ReactDOM.render / createRoot and mounts the app.

**Router + Routes:**
- `src/App.js` — defines routes (see `Route` entries for `/`, `/about`, `/projects`, `/experience`, `/checkit`, `/nfib`, `/emporium`, `/movie-night`, and fallback `/*` to `src/pages/ErrorPage.js`).

## Error Handling

Strategy: minimal. There is an application-level fallback route to `src/pages/ErrorPage.js` for unknown routes. Individual components/pages do not implement structured error boundaries or try/catch wrappers.

Patterns:
- Fallback route: `Route path="/*" element={<ErrorPage />} />` in `src/App.js`.
- No `ErrorBoundary` component detected. Consider adding React Error Boundaries for critical components.

## Cross-Cutting Concerns

Logging: no centralized logging; `console` usage not found in key UI files.

Validation: no form validation libraries observed.

Authentication: Not applicable — public portfolio site.

Accessibility: Some semantic markup present, but interactive elements often use `a` or `div` with click handlers (see `src/components/NavBar.js`, `src/pages/ProjectsPage.js`) instead of native buttons or accessible links. No aria attributes detected.

Monitoring / Observability: None detected (no Sentry, analytics, or error tracking integrations).

## Recommendations (UI/UX-focused)

- Add an `ErrorBoundary` component and wrap high-level layout (`src/App.js`) to catch render errors (`src/components/ErrorBoundary.js`).
- Standardize on one styling strategy: prefer `styled-components` (already used) for shared components and avoid inline event-style mutations (e.g., dynamic inline onMouseEnter style changes in `src/pages/Home.js`).
- Replace clickable non-semantic elements with semantic elements (use `<button>` for clickable cards in `src/pages/ProjectsPage.js` and `MenuItem` links in `src/components/NavBar.js`).
- Add basic accessibility attributes: `aria-label`, `role`, keyboard focus styles. Inspect `src/components/NavBar.js` and `src/components/MobileNavbar.js` as priorities.
- Add a small UI test harness (see TESTING.md) and a `test-utils` wrapper for rendering components with Router and Theme providers.

---

*Architecture analysis: 2026-02-16*
