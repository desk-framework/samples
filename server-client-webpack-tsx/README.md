# Sample

> **Note:** Don't forget to update this README file if you've copied these files to your own project.

### Description

This example contains both server-side and client-side code, using Webpack to bundle output for the client app. The server contains a single 'hello' API endpoint (with a deliberate delay), which is invoked by the client app to update a label UI component.

### Files and folders

- `package.json` — NPM package configuration
- `tsconfig.json` — TypeScript configuration for client
- `tsconfig.server.json` — TypeScript configuration for server
- `webpack.config.js` — Webpack build configuration for client
- `webpack.config.test.js` — Webpack build configuration for client tests
- `src/` — Contains all source code files, for both the server and client app, notably:
  - `src/app.ts` — Main entry point for the client app, which references files in the `src/client` and `src/shared` folders
  - `src/app.test.ts` — Main entry point for client tests
  - `src/server.ts` — Main entry point for server, which references files in the `src/server` and `src/shared` folders
- `dist/` — Build target folder for client
- `dist-server/` — Build target folder for server
- `.test-run` — Build target folder for client tests

### Commands

- `npm install` — Install all dependencies. Run this command before running any of the others.
- `npm update --save` — Update dependencies safely, and modify the `package.json` file.
- `npm run clean` — Remove all build and test artifacts (if any).
- `npm run dev` — Host the server and client in development mode, and continue watching for changes.
- `npm run check` — Perform static checks using the TypeScript compiler.
- `npm run build` — build server and client code to `dist-server` and `dist`, respectively
- `npm run test` — Compile and run all client tests once.
- `npm run test-watch` — Continuously compile and run all client tests in _watch_ mode.
- `npm start` (after building) — start the server app

## Server setup

The server app uses Fastify to start an HTTP server and route requests. A static file root endpoint is also registered for standalone use (without Webpack for development) to serve files from the `dist` folder.

Code is compiled using the TypeScript compiler, into the `dist-server` folder. The configuration for this build is contained in `./tsconfig.server.json`.

By default, the server starts on port 3000, but this can be changed using the PORT environment variable.

## Client setup

The client app uses the Desk framework with a single activity (and a minimal view).

It uses Webpack for development mode, with hot module reload (HMR). In this mode, Webpack proxies the `/api` path to the running HTTP server.

Code is compiled using Webpack into the `dist` folder. Webpack uses `./tsconfig.json` for this build. When the server app is run on its own, it serves the files in `dist` at the root endpoint.

Tests are included, which use a mock service for the API (in `HelloAPI.mock.ts`). Code for client tests are compiled and run using Webpack and a custom plugin (in `webpack.config.test.js`). To add more tests, create `.test.ts` files and make sure they are imported from `app.test.ts`.
