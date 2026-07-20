# Portfolio 2026

A GitHub-inspired developer portfolio built with Angular 21. Dark theme, modular component architecture, responsive layout, and WCAG 2.1 AA compliance.

## Tech Stack

- **Framework:** Angular 21 (standalone components, signal-based reactivity)
- **Styling:** SCSS with BEM methodology, CSS custom properties via SCSS variables
- **Build:** Vite via `@angular/build`, production budgets configured
- **Testing:** Vitest
- **Deployment:** Static build, no SSR required

## Architecture

```
src/
├── app/
│   ├── components/       # Presentational, reusable UI components
│   ├── pages/            # Route-level page components (lazy loaded)
│   ├── shared/
│   │   ├── components/   # Shared UI (StatusBadge, WebLink)
│   │   └── services/     # Data services (GithubService)
│   ├── app.config.ts     # Providers (router, http)
│   ├── app.routes.ts     # Lazy-loaded route definitions
│   └── app.ts            # Root component
├── environments/         # Environment-specific config
├── styles/               # Global SCSS variables & mixins
└── index.html
```

### Key Patterns

- **Lazy-loaded routes** via `loadComponent()` for code splitting
- **Signal inputs** (`input()`) and `signal()` for reactive state
- **OnPush change detection** on all components for performance
- **Service → Helper → Component** separation (see GitHub activity feature)
- **BEM SCSS** with shared mixins and variables for consistency
- **WCAG 2.1 AA** compliance: skip navigation, aria attributes, semantic HTML

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm start
# → http://localhost:4200

# Production build
npm run build

# Run tests
npm test
```

## Environment Configuration

Environment files are located in `src/environments/`:

- `environment.ts` — development config
- `environment.prod.ts` — production config

Configuration includes GitHub username and API URL for the contribution graph.

## Project Structure Decisions

| Decision | Rationale |
|----------|-----------|
| No NgModules | Angular 21 standalone components — simpler, tree-shakeable |
| Signal inputs over @Input | Modern reactive API, better type inference |
| OnPush everywhere | Signals + OnPush = optimal change detection |
| BEM + SCSS variables | Scalable CSS without runtime overhead |
| Helper functions (pure) | Testable mapping logic, separated from framework |
| Lazy routes | Demonstrates code splitting awareness |

## License

Private project.
