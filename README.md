# Portfolio Site (Vite + React + TypeScript)

Live site: https://jpmacleod.netlify.app/

## Changelog (Modernization)

### UI/UX + IA
- Rebuilt the single-page layout using reusable primitives: `Container`, `Section`, `Button`, `Tag`, `Card`, `IconLink`, `Modal`, and `Toast`.
- Upgraded hierarchy and spacing with consistent visual rhythm and clearer CTA paths.
- Added rich project discovery UX: search, tag filters, featured projects, and case-study modal details.
- Improved contact journey with professional inline statuses, validation feedback, and alternative contact actions.

### Navigation + Accessibility
- Replaced fragile scroll-link behavior with robust hash-based section navigation (`/#home`, `/#work`, etc.).
- Added active section scrollspy highlighting and reliable section restore on refresh.
- Improved mobile navigation with focus trap, ESC close, and body scroll lock.
- Added visible focus styles, semantic sectioning, skip-link, and ARIA live messaging for status updates.

### Theming + Motion
- Added dark mode with persisted preference and system support.
- Added reduced-motion handling in both CSS and component behavior.

### SEO + Discoverability
- Upgraded metadata in `index.html` (description, OG, Twitter, canonical).
- Added runtime SEO default management for section-level metadata updates.
- Added JSON-LD structured data (Person + WebSite).
- Added `public/sitemap.xml` and updated `public/robots.txt`.

### Performance + Build Quality
- Added lazy section loading (`React.lazy` + `Suspense`) for below-the-fold chunks.
- Added image dimensions and lazy-loading patterns to reduce layout shift and improve loading behavior.
- Maintained successful lint/typecheck/build pipelines.

### Testing + CI
- Added unit tests for navigation hash logic and project filtering/search logic.
- Added Playwright e2e scenario for core user flow (home → work → project details → contact validation/submission).
- Added GitHub Actions CI workflow for install/lint/typecheck/test/build.

### Content Workflow
- Centralized editable profile/site metadata in `src/content/site.ts`.
- Upgraded skills and projects to typed, data-driven content models in `src/data/skills.ts` and `src/data/work.ts`.

## Current Architecture

- **Core app shell**: `src/App.tsx`
- **Layout + nav**: `src/layouts/Navbar.tsx`
- **Sections**: `src/sections/*`
- **Design system**: `src/components/*`
- **Typed content models**: `src/types/content.ts`
- **Editable content**: `src/content/site.ts`, `src/data/skills.ts`, `src/data/work.ts`
- **Utilities/hooks**: `src/utils/*`, `src/hooks/*`

## Prioritized Backlog (Plan)

### P0 (Implemented)
- Design system + responsive layout modernization
- Hash deep-link navigation + active nav state + accessible mobile menu
- Project search/filter/case-study UX
- Contact validation + toast/inline statuses + spam mitigation
- SEO metadata + canonical + sitemap/robots + JSON-LD
- Unit tests + Playwright e2e + CI

### P1 (Recommended next)
- Optional route-based project detail pages (`/projects/:slug`) for stronger SEO indexing
- Add richer per-project media assets (real screenshots, short demo clips)
- Add event dashboard integration for CTA analytics review

### P2 (Future)
- CMS/MDX-backed content authoring workflow
- i18n support and localization-friendly content modeling
- Advanced image pipeline (responsive source sets + WebP/AVIF variants)

## How to Run

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Lint / typecheck
```bash
npm run lint
npm run typecheck
```

### Unit tests
```bash
npm run test:unit
```

### E2E tests (Playwright)
```bash
npx playwright install
npm run test:e2e
```

### CI-equivalent local run
```bash
npm run ci
```

## Lighthouse Checklist (Target: 90+)

- [ ] Performance 90+
- [ ] Accessibility 90+
- [ ] Best Practices 90+
- [ ] SEO 90+

Recommended validation steps:
- Run production preview (`npm run build && npm run preview`)
- Audit homepage and `/#work` in Lighthouse
- Verify keyboard nav, reduced motion, and dark mode behavior
