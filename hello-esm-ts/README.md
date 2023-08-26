# Sample

### Description

This example package contains a minimal (unrealistic) Hello World application using ES Modules with TypeScript.

> **Note:** While this setup works, building a front-end application _without_ bundling the output into a single JS file is highly unusual, and in most cases impractical. ES Modules also require browser support. Use this method only in cases where a similar setup is already in place.

### Files and folders

- `package.json` — NPM package configuration
- `tsconfig.json` — TypeScript configuration
- `copy-lib.js` — A script that copies the Desk library to `app/lib/` after `npm install`
- `app/` — Contains all source code AND output files, notably `index.html` and `hello.ts`
- `app/lib` — Created by the `copy-lib.js` script to contain the Desk ES module file

### Commands

- `npm install` — Install all dependencies. Run this command before running any of the others.
- `npm update --save` — Update dependencies safely, and modify the `package.json` file.
- `npm run clean` — Remove all build artifacts (if any).
- `npm run build` — Compile the application.
- `npm run watch` — Compile the application, and watch for changes.
- `npm start` — Host the application, including `index.html` and the referenced JS (ES module) files.
- `npm dev` — Combination of `watch` and `start`, i.e. compile the application, watch for changes, and host the result in parallel.

### Build tooling

- This application does not use any build tooling, other than the TypeScript compiler itself.
