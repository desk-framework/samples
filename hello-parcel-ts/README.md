# Sample

### Description

This example package contains a minimal (unrealistic) Hello World application using Parcel and TypeScript.

### Files and folders

- `package.json` — NPM package configuration
- `app/` — Contains all source code files, notably `index.html` and `hello.ts`
- `dist/` — Build target folder

### Commands

- `npm install` — Install all dependencies. Run this command before running any of the others.
- `npm update --save` — Update dependencies safely, and modify the `package.json` file.
- `npm run clean` — Remove all build artifacts (if any).
- `npm run dev` — Host the application in development mode, and continue watching for changes.
- `npm run build` — Compile and bundle the application.

### Build tooling

- This application is built using the Parcel bundler, from `index.html` without any configuration.
- The final output is stored as `dist/index.html`.
