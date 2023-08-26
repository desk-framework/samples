# Sample

> **Note:** Don't forget to update this README file if you've copied these files to your own project.

### Description

This example package contains a single-screen multiplication practice game. Use it as inspiration for your own single-screen apps written using Desk and JSX syntax.

Only client-side code is included in this application. Refer to the `server-client-...` examples for a solution that includes both server side and client side code.

### Files and folders

- `package.json` — NPM package configuration
- `tsconfig.json` — TypeScript configuration
- `webpack.config.js` — Webpack build configuration
- `src/` — Contains all source code files, with the main entry point in `app.ts`
- `src/activities` — Contains activity classes (and corresponding views), one folder for each activity
- `src/models` — Contains model classes
- `src/styles` — Contains files with exports for common styles, icons, and colors.
- `dist/` — Build target folder

### Commands

- `npm install` — Install all dependencies. Run this command before running any of the others.
- `npm update --save` — Update dependencies safely, and modify the `package.json` file.
- `npm run clean` — Remove all build and test artifacts (if any).
- `npm run dev` — Host the application in development mode, and continue watching for changes.
- `npm run check` — Perform static checks using the TypeScript compiler.
- `npm run build` — Compile and bundle the application.

### Build tooling

- This application is built using the Webpack bundler.
- The file `webpack.config.js` contains all build configuration, which is used by the `npm run build` and `npm run dev` commands.
- An alias for `~` is added both for Webpack and TypeScript, so that imports can reference e.g. `~/models/...` rather than having to use relative paths.
- `ts-loader` is used to compile `.ts` and `.tsx` files.
- `html-webpack-plugin` is used to generate an HTML file based on the `src/index.html` template.
- The final output is stored as `dist/bundle.js`.
