# Svelte 5 + better-auth v1 demo

This demo showcases how one might use better auth with SvelteKit.
Don't hesitate to drop some feedback and report any issues. <3

## Quick Start

```bash
pnpm install
## Create an env file
cp .env.example .env
```

Edit the .env file with your SQLite credentials, or set the DATABASE_URL to `file:local.db` to create a local SQLite database.

```bash
## Initialize the database and run an initial migration
pnpm db:push
## Run the project locally in dev mode, and launch the browser
pnpm dev
```

## Tech used

- [TypeScript](https://www.typescriptlang.org/)
- [SvelteKit](https://kit.svelte.dev/)
- [better-auth](https://better-auth.vercel.app/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [SQLite](https://www.sqlite.org/)
- [Tailwind CSS](https://tailwindcss.com/)
