# Apollo Website — working agreement

This repo **auto-deploys**: every push to `main` ships to production via Vercel —
live at https://joshuaapollo.com (Vercel alias: https://apollowebsite-sigma.vercel.app).
Treat `main` as always-deployable.

## Workflow (applies whether you're editing from your laptop or your phone)

1. **Sync first** — before starting any work: `git fetch origin && git pull --rebase`.
2. **Branch per task** — never commit directly to `main`:
   `git switch -c feat/<short-name>`.
3. **Commit small, push early** — push the branch and open a PR:
   `git push -u origin feat/<short-name>` → `gh pr create` (or the GitHub/phone UI).
4. **Preview before merge** — Vercel posts a preview URL on every PR; check it (great on mobile).
5. **Merge = deploy** — merging the PR into `main` is the only thing that ships to production.
6. **One driver at a time** — don't edit the same files from phone and laptop at once;
   let one branch land first to avoid divergence.

## Project facts

- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind · framer-motion. Statically prerendered.
- **Content** lives in `src/lib/data.ts`; page sections in `src/components/sections/`; reusable UI in `src/components/ui/`.
- **Date-driven values** (academic year, availability) are computed client-side in `src/lib/useStanding.ts` so they auto-update — don't hard-code the year.
- **Verify before pushing:** `npm run build` must pass.
- **Don't commit large media** (`*.mov` is gitignored).
- After big git operations (rebase/branch switch/file deletes), restart the dev server so it doesn't serve a stale module graph.
