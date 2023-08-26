# Sample

> **Note:** Don't forget to update this README file if you've copied these files to your own project.

### Description

This example package contains a simple To Do front-end app using Desk and TypeScript, bundled using ES Build.

### Files and folders

- `package.json` — NPM package configuration
- `tsconfig.json` — TypeScript configuration
- `tsconfig.test.json` — TypeScript configuration for tests
- `esbuild.js` — A script that builds using ES Build for production
- `esbuild.dev.js` — A script that builds using ES Build for development, and watches for changes
- `esbuild.test.js` — A script that builds tests using ES Build, runs them, and watches for changes
- `src/` — Contains all source code files, notably `app.ts` and `app.test.ts` which are the main entry points for the application and tests, respectively
- `src/todo` — Contains the activity class and its corresponding views
- `src/model` — Contains the model class
- `dist/` — Build target folder
- `.test-run` — Test build target folder

### Commands

- `npm install` — Install all dependencies. Run this command before running any of the others.
- `npm update --save` — Update dependencies safely, and modify the `package.json` file.
- `npm run clean` — Remove all build and test artifacts (if any).
- `npm run dev` — Host the application in development mode, and continue watching for changes.
- `npm run check` — Perform static checks using the TypeScript compiler.
- `npm run build` — Compile and bundle the application.
- `npm run test` — Compile and run all tests once.
- `npm run test-watch` — Continuously compile and run all tests in _watch_ mode.

### Build tooling

- This application is built using ES Build.
- The file `esbuild.js` contains all build configuration for production, which is used by the `npm run build` command.
- The file `esbuild.dev.js` contains all build configuration for development, which is used by the `npm run dev` command.
- The final output is stored as `dist/bundle.js`, an IIFE module that references the Desk library using a `require()` call (provided by the Desk web context).

### Tests

- Tests are built and run using ES Build.
- The file `esbuild.test.js` contains all build configuration for tests, which is used by the `npm run test` and `npm run test-watch` commands.
- To add tests, create more `.test.ts` files and make sure to import them in `src/app.test.ts`.
