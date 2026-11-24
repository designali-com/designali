<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# UI SDK (ui-sdk.dev)

`@ui-sdk/react` and `@ui-sdk/core` (beta, APIs may change) are installed in `apps/web` and `packages/ui`. Before building or editing a ui-sdk component:

- Follow the bundled skill at `packages/ui/node_modules/@ui-sdk/core/skills/ui-sdk/SKILL.md`.
- Read the version-matched docs at `apps/web/node_modules/@ui-sdk/react/docs/` (`llms.txt`, `components/<name>.md`).

Where things live (apps/web):

- Wrappers: `registry/designali/ui/ui-sdk/<name>.tsx`. Installed by users to `components/ui-sdk/<name>.tsx` (never `components/ui`, so they don't overwrite shadcn files). `fixImport` in `src/lib/registry.ts` rewrites the import paths.
- Demos: `registry/designali/components/ui-sdk/<name>/<name>-demo*.tsx`. Preview name is `ui-sdk-<file name>`.
- Docs: `src/content/docs/ui-sdk/<name>.mdx`, served at `/docs/ui-sdk/<name>`.
- `registry/registry-ui-sdk.ts` and `src/content/docs/ui-sdk/meta.json` are generated from those folders. Regenerate them instead of editing by hand, then run `pnpm registry:build`.

Rules:

- Import each component from its own entry, e.g. `import { Toggle } from "@ui-sdk/react/toggle"`. There is no root import.
- Match the look of the shadcn component of the same name in `packages/ui/src/components`, and keep its export names where UI SDK supports them, so switching is an import change.
- Style with Tailwind theme tokens and UI SDK data-attribute variants (`data-open:`, `data-pressed:`). Animate with transitions on `data-starting-style:`/`data-ending-style:`, not tw-animate keyframes.
- Do not import `@ui-sdk/core/web.css`. It styles every `[data-slot]`, `a`, `hr`, `code` and `kbd`, and our shadcn components also use `data-slot`.
- Keep `@layer ui-sdk;` as the first rule in `packages/ui/src/styles/globals.css`.
