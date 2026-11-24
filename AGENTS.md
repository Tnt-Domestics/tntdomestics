# Project rules

- Framework: TanStack Start (file routes in `src/routes/`, root shell and site-wide head tags in `src/routes/__root.tsx`). Why: migrated from Vite + React Router for SSR and per-page SEO metadata.
- Each page route sets its own `head()` title/description; site-wide tags (Google tag GTM-PJNS78KT, OG image, fonts) live in `__root.tsx`. Why: index.html no longer exists.
- Theme tokens and custom utilities live in `src/styles.css` (Tailwind v4, no tailwind.config). Why: Tailwind v4 is CSS-first.
- Web fonts load via `<link>` in `__root.tsx` head, never CSS `@import url(...)`. Why: the build resolves @import from the filesystem only.
- Every page uses `pageHead(path, title, description)` from `src/lib/seo.ts` for title, description, canonical, og:* and twitter tags. Why: one consistent pattern; canonicals point at https://tntdomestics.com.
- Router uses `trailingSlash: "always"`; canonical paths and `<Link to>` values end in "/". Why: canonicals must match the URL that is actually served (slashless paths redirect).
- FAQ copy lives in `src/content/faqs.tsx` and renders through `FaqSection` (visible accordions); no FAQPage JSON-LD. Why: single source shared by service pages and /faq.
- Service-area market pages are written individually, never one template with the city swapped. Why: avoids doorway-page penalties.
