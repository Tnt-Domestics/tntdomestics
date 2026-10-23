# Architecture
- Keep public content and business identity in src/site shared data; all live pages use Site so navigation, contact details and SEO remain consistent.
- Render public pages to static HTML using the capped Vite prerender plugin; the same renderer serves preview HTML and production route files for crawlers without JavaScript.
- Keep sitemap.xml static and update it whenever public canonical routes change; omit lastmod unless an authoritative page-specific content timestamp exists.
- Intake quotes only through the validated submit-quote Cloud function; the private lead table has no visitor grants or read policies to prevent disclosure.
- Reuse original brand media in public/site for stable URLs in both HTML and per-page social metadata.
