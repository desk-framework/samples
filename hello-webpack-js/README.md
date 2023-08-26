# Sample

### Description

This example package contains a minimal (unrealistic) Hello World application using Webpack, without TypeScript.

### Files and folders

- `package.json` — NPM package configuration
- `webpack.config.js` — Webpack build configuration
- `src/` — Contains all source code files, notably `index.html` and `hello.js`
- `dist/` — Build target folder

### Commands

- `npm install` — Install all dependencies. Run this command before running any of the others.
- `npm update --save` — Update dependencies safely, and modify the `package.json` file.
- `npm run clean` — Remove all build artifacts (if any).
- `npm run dev` — Host the application in development mode, and continue watching for changes.
- `npm run build` — Compile and bundle the application.

### Build tooling

- This application is built using the Webpack bundler.
- The file `webpack.config.js` contains all build configuration, which is used by the `npm run build` and `npm run dev` commands.
- `html-webpack-plugin` is used to generate an HTML file based on the `src/index.html` template.
- The final output is stored as `dist/hello.js`.
