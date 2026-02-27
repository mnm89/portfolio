# AGENTS.md

## Cursor Cloud specific instructions

This is a single-service Next.js 14 portfolio/blog site. No databases, Docker, environment variables, or external API keys are required.

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Next.js dev server | `pnpm dev` | 3000 | Only service needed |

### Key commands

- **Lint**: `pnpm lint`
- **Build**: `pnpm build`
- **Dev server**: `pnpm dev` (runs on port 3000)

### Codebase notes

- Blog content lives in `/content/*.mdx` files, read at render time via `src/data/blog.ts` using Node.js `fs`.
- Portfolio/resume data is a static TypeScript object in `src/data/resume.tsx`.
- No API routes exist; the app is entirely static/SSG.
- Uses `pnpm@9.4.0` as the package manager (declared in `package.json` `packageManager` field).
- Path alias `@/*` maps to `./src/*` (configured in `tsconfig.json`).
