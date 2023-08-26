# Desk framework

## Getting started

This repository is part of the **Desk framework**, a robust JavaScript toolkit for highly maintainable client-side applications.

Visit [desk-framework.com](https://desk-framework.com) to learn more and get started.

## Samples

The following examples are included in this repository. Check the readme file in each folder for details.

- **Hello world** — a bare minimum (unrealistic) application showing the least amount of setup required.
  - [JavaScript IIFE](./hello-iife-js)
    - **Bundler:** none (only postinstall file copy)
    - **Import:** IIFE
    - **Language:** JavaScript
  - [JavaScript module](./hello-esm-js)
    - **Bundler:** none (only postinstall file copy)
    - **Import:** ES Module
    - **Language:** JavaScript
  - [JavaScript + Webpack](./hello-webpack-js)
    - **Bundler:** Webpack
    - **Import:** ES Module (Webpack)
    - **Language:** JavaScript
  - [TypeScript + Parcel](./hello-parcel-ts)
    - **Bundler:** Parcel
    - **Import:** ES Module (Parcel)
    - **Language:** TypeScript
  - [TypeScript + Webpack](./hello-webpack-ts)
    - **Bundler:** Webpack
    - **Import:** ES Module (Webpack)
    - **Language:** TypeScript
- **To-do app** — a single-activity application, somewhat realistic implementation.
  - [TypeScript + Parcel](./todo-parcel-tsx)
    - **Bundler:** Parcel
    - **Import:** ES Module (Parcel)
    - **Language:** TypeScript, TSX
    - **Tests:** Compiled TS, run with Node
  - [TypeScript + Webpack](./todo-webpack-tsx)
    - **Bundler:** Webpack
    - **Import:** ES Module (Webpack)
    - **Language:** TypeScript, TSX
    - **Tests:** Compiled and run using Webpack
  - [TypeScript + ES Build](./todo-esbuild-tsx)
    - **Bundler:** ES Build
    - **Import:** IIFE
    - **Language:** TypeScript, TSX
    - **Tests:** ES Build (watched)
- **Client-server app** — a simple application that includes both a server and a client, with dev (watch/HMR) mode
  - [TypeScript + Parcel](./server-client-parcel/)
    - **Bundler:** Parcel
    - **Import:** ES Module (Parcel)
    - **Language:** TypeScript, TSX
    - **Tests (client):** Compiled TS, run with Node
  - [TypeScript + Webpack](./server-client-webpack/)
    - **Bundler:** Webpack
    - **Import:** ES Module (Webpack)
    - **Language:** TypeScript, TSX
    - **Tests (client):** Compiled and run using Webpack
- **Electron app** — a demonstration of Desk usage from within an Electron renderer process
  - [Forge + TypeScript + Webpack](./electron-forge-tsx/)
    - **Bundler:** Webpack
    - **Import:** ES Module (Webpack)
    - **Language:** TypeScript, TSX
    - (No tests)
- **Multi-page CRUD app** — a simple CRUD-style app with responsive master-detail views
  - [TypeScript + Webpack](./crud-webpack-ts/)
    - **Bundler:** Webpack
    - **Import:** ES Module (Webpack)
    - **Language:** TypeScript (no TSX)
    - **Tests:** Compiled and run using Webpack
- **Single-page game** — a simple multiplication practice game app with a single full-screen activity and a settings dialog
  - [TypeScript + Webpack](./game-webpack-tsx/)
    - **Bundler:** Webpack
    - **Import:** ES Module (Webpack)
    - **Language:** TypeScript, TSX
    - (No tests)
- **Component with custom renderer** — a demonstration of a completely custom (canvas based) renderer for a chart component, on a static page
  - [TypeScript + Parcel](./custom-render-parcel-ts/)
    - **Bundler:** Parcel
    - **Import:** ES Module (Parcel)
    - **Language:** TypeScript
    - (No tests)

## License

This code is free and open source. Copyright and [MIT](https://opensource.org/licenses/MIT) license terms still apply.

Copyright &copy; 2023 Jelmer Cormont
