# Sample

> **Note:** Don't forget to update this README file if you've copied these files to your own project.

### Description

This example package contains a CRUD-style application with a responsive master-detail view.

For this example, data is stored in the browser's local storage, and the application runs on the client side only. Refer to the `server-client-...` examples for a solution that includes both server side and client side code.

### Files and folders

- `package.json` — NPM package configuration
- `tsconfig.json` — TypeScript configuration
- `webpack.config.js` — Webpack build configuration
- `webpack.config.test.js` — Webpack test build configuration
- `src/` — Contains all source code files, notably `app.ts` and `app.test.ts` which are the main entry points for the application and tests, respectively
- `src/activities` — Contains activity classes (and corresponding views), one folder for each activity
- `src/models` — Contains model classes
- `src/services` — Contains service classes
- `src/views` — Contains reusable composite views
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

- This application is built using the Webpack bundler.
- The file `webpack.config.js` contains all build configuration, which is used by the `npm run build` and `npm run dev` commands.
- An alias for `~` is added both for Webpack and TypeScript, so that imports can reference e.g. `~/models/...` rather than having to use relative paths.
- For Hot Module Reload (HMR), each activity may check for `import.meta.webpackHot` and call `app.hotReload(...)` accordingly (last lines of all activity source files).
- `ts-loader` is used to compile `.ts` and `.tsx` files.
- `html-webpack-plugin` is used to generate an HTML file based on the `src/index.html` template.
- `compression-webpack-plugin` is used to compress output for production use (optional).
- The final output is stored as `dist/bundle.js`.

### Tests

- Tests are built and run using the Webpack bundler.
- The file `webpack.config.test.js` contains all build configuration, which is used by the `npm run test` and `npm run test-watch` commands.
- A simple plugin (in Webpack config) is used to run tests after compilation.
- To add tests, create more `.test.ts` files and make sure to import them in `src/app.test.ts`.
