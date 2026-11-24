# Project rules

- Framework: TanStack Start (file routes in `src/routes/`, root shell and site-wide head tags in `src/routes/__root.tsx`). Why: migrated from Vite + React Router for SSR and per-page SEO metadata.
- Each page route sets its own `head()` title/description; site-wide tags (Google tag GTM-PJNS78KT, OG image, fonts) live in `__root.tsx`. Why: index.html no longer exists.
- Theme tokens and custom utilities live in `src/styles.css` (Tailwind v4, no tailwind.config). Why: Tailwind v4 is CSS-first.
- Web fonts load via `<link>` in `__root.tsx` head, never CSS `@import url(...)`. Why: the build resolves @import from the filesystem only.
