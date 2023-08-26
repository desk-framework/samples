# Sample

> **Note:** Don't forget to update this README file if you've copied these files to your own project.

### Description

This example package contains a simple To Do front-end app using Desk and TypeScript, bundled using Parcel.

### Files and folders

- `package.json` — NPM package configuration
- `tsconfig.json` — TypeScript configuration
- `tsconfig.test.json` — TypeScript configuration for tests
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

### Build tooling

- This application is built using the Parcel bundler, from `index.html` without any configuration.
- The final output is stored as `dist/index.html`.

### Tests

- Tests are built using the TypeScript compiler, and run using Node.
- To add tests, create more `.test.ts` files and make sure to import them in `src/app.test.ts`.
