# React Pattern Exploration

This repository is a testbed for my exploration of patterns of TypeScript / React Single Page App development.

My goals are:

- Normal SPA niceties like linting, formatting, unit testing, and E2E testing
- Fast development cycle (quick server startup, fast transpilation)
- Visual development of components in isolation, preferably without mocking
- Visual development of pages in isolation, preferably without mocking
- "Feels like a live app" experience when running the app locally during development, with mocking of all API calls
- Reduction of duplication between mocking layers
- Code splitting / lazy loading
- Feature-based or at least page-based folder structure, trying to keep everything about a given page within that folder unless it's a shared component

## Development Process

- Have an idea or want to pursue a goal
- Start a feature branch
- Make commits toward to the branch, with descriptive comments when there are achievements
- If I like the pattern that's emerging, then merge the branch into main
- If I don't - then keep the branch but don't merge
- Maybe publish a blog article about the exploration exercise

## Technologies in use in `main` so far

- [PNPM](https://pnpm.io) - JavaScript package manager with improved security and execution speed
- [TypeScript](https://www.typescriptlang.org) - JavaScript with syntax for types
- [React](https://react.dev) - UI rendering library
- [Vite](https://vite.dev) - transpiler/bundler and general glue
- [Vitest](https://vitest.dev) - unit testing
- [Storybook](https://storybook.js.org) - component development isolation (future snapshot and accessibility tests)
- [MSW (Mock Service Worker)](https://mswjs.io) - API mocking (more opportunities in the future for mocking in other areas)
- [Zod](https://zod.dev) - TypeScript-first schema validation (think there's more opportunity with this and forms)
