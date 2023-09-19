import * as fs from "fs";
import * as esbuild from "esbuild";

// 1. copy Desk library file
if (!fs.existsSync("dist")) fs.mkdirSync("dist");
fs.copyFileSync(
	"./node_modules/@desk-framework/frame-web/lib/desk-framework-web.es2018.iife.min.js",
	"./dist/desk-framework-web.es2018.iife.min.js",
);

// 2. copy HTML file (add more files here if needed)
fs.copyFileSync("src/index.html", "dist/index.html");

// 3. compile and bundle scripts
esbuild.buildSync({
	entryPoints: ["src/app.ts"],
	bundle: true,
	minify: true,
	sourcemap: false,
	packages: "external",
	format: "iife",
	target: "ES2018",
	outfile: "dist/bundle.js",
	globalName: "bundle",
});
