# Multi-page portfolio implementation plan

## Product scope

Expand the existing Vasilka Vlaykova portfolio into a clean, multi-page personal website while preserving the supplied editorial identity, factual project descriptions, verified repository links, and the request to remove extra decorative graphics and icons. Public pages are Home, About, Projects, four individual project case studies, Learning Journal, and Contact. Keep education and skills on About; give each case study a stable route. Do not fabricate project results, testimonials, client history, email address, or journal entries.

## Implementation approach

Reuse the existing React/Vite static website and current project content. Resolve the page from `window.location.pathname` in the browser and from an explicit prerender path during build. Use ordinary semantic `<a href>` navigation so routes remain crawlable and direct-loadable, without adding a client-side router dependency. Extend static prerendering to write page-specific HTML under `dist/public/<route>/index.html`, with distinct title, description, and social metadata. Keep `client/public/manus-routes.json` synchronized with the route source.

Create reusable site navigation, footer, and page-shell components. Add a text-only light/dark toggle using the existing theme context, with a persisted visitor choice and device-preference default. Rework Home, About, Projects, case-study, Learning Journal, and Contact content. Use factual summaries verified from supplied material and public repository descriptions. Keep the journal honest and empty until genuine entries exist.

Optimize without a new dependency: retain static prerendering, keep client code and above-the-fold content small, use native links and system fonts, avoid unnecessary animation and JavaScript, keep one intentional disclosed AI-generated portrait on Home, and reserve media dimensions. Use semantic HTML and responsive CSS; keep motion subtle and reduced-motion aware without delaying essential content.

## Project structure

- `client/src/App.tsx`: URL resolver and shared shell/page composition.
- `client/src/components/`: shared site navigation, footer, page shell and error fallback.
- `client/src/pages/`: Home, About, Projects, project detail, Learning Journal, Contact and Not Found.
- `client/src/data/projects.ts`: factual project summaries, technology lists and verified repository URLs.
- `client/src/data/routes.ts`: stable route paths and page-specific SEO metadata.
- `client/src/contexts/ThemeContext.tsx`: persisted/system-aware light/dark state.
- `client/src/index.css`: restrained design tokens, both theme palettes, responsive layouts, focus and reduced-motion rules.
- `client/index.html`: viewport, base metadata and pre-hydration theme initialization.
- `scripts/prerender.tsx`: write crawlable HTML and unique metadata for each route.
- `client/public/manus-routes.json`: public route manifest; `client/public/robots.txt`: allow crawling.

## Design

- **Design Movement:** Minimal editorial portfolio continuing the supplied high-contrast serif-and-sans direction in a calmer, less decorative form.
- **Core Principles:** Clear reading hierarchy; generous whitespace; factual project storytelling; predictable navigation.
- **Color Philosophy:** Paper-like light theme and charcoal dark theme share one restrained terracotta accent; backgrounds and text switch with comfortable contrast.
- **Layout Paradigm:** Spacious editorial page column with left-aligned headings, simple stacked content, and a clear project index that opens dedicated detail pages.
- **Signature Elements:** A distinctive serif page title; thin separators; small terracotta active-link/heading accents.
- **Interaction Philosophy:** Normal browser navigation, concise focus feedback, simple theme toggle, no motion that competes with reading.
- **Animation:** Keep only short color/underline transitions and a subtle one-time page entrance; no parallax, cursor effects, looping motion or large image zoom. Respect `prefers-reduced-motion` by removing translation and retaining only brief state feedback.
- **Typography System:** Georgia for editorial headings and local system sans-serif for body/navigation; no remote font requests; concise line lengths and readable body sizes.
- **Brand Essence:** A curious London-based Computing student sharing practical exploration in data, AI and thoughtful software; curious, clear, grounded.
- **Brand Voice:** Direct, thoughtful, factual. Example: “Projects built while learning by doing.” “Curious about data, AI, and how useful systems fit together.”
- **Wordmark & Logo:** Preserve the text wordmark and existing favicon monogram; do not add pictorial logos or navigation icons.
- **Signature Brand Color:** Existing terracotta red, used sparingly for active navigation, links and heading emphasis.

## Dependencies and serving

No new runtime dependencies, backend services, database, or API are required. Vite builds the static client and the prerender script writes the complete route set and metadata. Keep current static build output (`dist/public`) and existing host port. Browser routes use root-relative URLs and each declared public page path is present in `manus-routes.json`.
