# Codebase Structure

**Analysis Date:** 2026-02-16

## Directory Layout

```
[project-root]/
├── src/                  # Application source
│   ├── components/       # Reusable UI components
│   │   ├── NavBar.js
│   │   ├── MobileNavbar.js
│   │   ├── Footer.js
│   │   └── ScrollToTop.js
│   ├── pages/            # Route-level page components
│   │   ├── Home.js
│   │   ├── AboutMe.js
│   │   ├── ProjectsPage.js
│   │   ├── Experience.js
│   │   └── ErrorPage.js
│   ├── projects/         # Project detail components
│   │   ├── Checkit.js
│   │   ├── NFIB.js
│   │   ├── Emporium.js
│   │   └── MovieNight.js
│   ├── images/           # Static images
│   ├── GlobalStyles.js   # styled-components global theme
│   ├── custom-styles.css # additional CSS
│   └── App.js            # Router and app composition
├── public/               # Public assets and index.html
├── package.json
└── .planning/            # Generated analysis (this folder)
```

## Directory Purposes

**`src/components/`**:
- Purpose: small reusable UI parts (navigation, footer, mobile menu).
- Contains: `src/components/NavBar.js`, `src/components/MobileNavbar.js`, `src/components/Footer.js`, `src/components/ScrollToTop.js`.

**`src/pages/`**:
- Purpose: route-level views composed into the router in `src/App.js`.
- Contains: `src/pages/Home.js`, `src/pages/ProjectsPage.js`, `src/pages/AboutMe.js`, `src/pages/Experience.js`, `src/pages/ErrorPage.js`.

**`src/projects/`**:
- Purpose: portfolio project pages; each project is a separate component that the router references (see `src/App.js`).
- Contains: `src/projects/Checkit.js`, `src/projects/NFIB.js`, `src/projects/Emporium.js`, `src/projects/MovieNight.js`.

**`src/images/`**:
- Purpose: asset storage for images used across the site (profile image, project screenshots).

**Root files:**
- `src/App.js` — routes and top-level layout.
- `src/index.js` — app mount point.
- `package.json` — dependencies and scripts.

## Key File Locations

**Entry Points:**
- `src/index.js`: mounts React app and renders `src/App.js`.
- `src/App.js`: route definitions and global layout (imports `src/components/NavBar.js`, `src/GlobalStyles.js`, `src/components/Footer.js`).

**Configuration:**
- `package.json`: scripts (`start`, `build`, `test`) and dependencies (`react`, `react-bootstrap`, `styled-components`, `react-router-dom`).

**Core Logic:**
- `src/pages/*` and `src/components/*` contain the application logic and UI behavior. Navigation uses `useNavigate` across pages (see `src/pages/Home.js`, `src/pages/ProjectsPage.js`, `src/components/NavBar.js`).

**Testing:**
- No test directory or test files detected. `package.json` includes testing libraries (`@testing-library/react`, `@testing-library/jest-dom`) but no `src/**/*.test.js` files found.

## Naming Conventions

**Files:**
- PascalCase for React components and page files: `Home.js`, `NavBar.js`, `ProjectsPage.js`.

**Directories:**
- Feature grouping by purpose: `components/`, `pages/`, `projects/`.

## Where to Add New Code

New UI feature (page):
- Implementation: add `src/pages/<FeatureName>.js` and register route in `src/App.js`.
- Components: place reusable pieces in `src/components/`.
- Images: add to `src/images/` and reference with relative imports.
- Tests: add `src/pages/<FeatureName>.test.js` or co-locate `__tests__` in same folder (no test pattern currently enforced).

New reusable component:
- Implementation: `src/components/<ComponentName>.js` using `styled-components` pattern (follow `src/components/NavBar.js` example).
- Story / demo: include a simple example in `src/pages/Home.js` or a new `src/pages/DevPlayground.js` for manual QA.

Utilities / Helpers:
- Create a new `src/utils/` directory for shared pure functions. Export named functions; avoid default exports for utilities.

## Special Directories

**`src/projects/`**
- Purpose: project showcase pages. Generated: No. Committed: Yes.

**`.planning/`**
- Purpose: analysis outputs. Generated: Yes. Committed: Yes.

---

*Structure analysis: 2026-02-16*
