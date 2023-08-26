# Sample

> **Note:** Don't forget to update this README file if you've copied these files to your own project.

### Description

This example shows how to create a view class that defines a custom renderer. The `ChartView` class in this example contains a `render(callback)` method that draws to an HTML `<canvas>` element.

In this project, a single instance of the view is rendered by a `showChart()` function. In a more complex application, a view with custom renderer can also be used like any other view, e.g. from an activity.

### Files and folders

- `package.json` — NPM package configuration
- `tsconfig.json` — TypeScript configuration
- `src/index.html` — Main file to be bundled using Parcel
- `src/app.ts` — TypeScript entry point, exports a single function
- `src/ChartView.ts` — Contains the view class with custom renderer
- `dist/` — Build target folder

### Commands

- `npm install` — Install all dependencies. Run this command before running any of the others.
- `npm update --save` — Update dependencies safely, and modify the `package.json` file.
- `npm run clean` — Remove all build and test artifacts (if any).
- `npm run dev` — Host the application in development mode, and continue watching for changes.
- `npm run build` — Compile and bundle the application.

### Build tooling

- This application is built using the Parcel bundler, from `index.html` without any configuration.
- The final output is stored as `dist/index.html`.
