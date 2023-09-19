import * as fs from "fs";
import * as esbuild from "esbuild";

// 1. copy Desk library files
if (!fs.existsSync("dist")) fs.mkdirSync("dist");
fs.copyFileSync(
	"./node_modules/@desk-framework/frame-web/lib/desk-framework-web.es2018.iife.min.js",
	"./dist/desk-framework-web.es2018.iife.min.js",
);
fs.copyFileSync(
	"./node_modules/@desk-framework/frame-web/lib/desk-framework-web.es2018.iife.min.js.map",
	"./dist/desk-framework-web.es2018.iife.min.js.map",
);

// 2. copy HTML file (add more files here if needed)
fs.copyFileSync("src/index.html", "dist/index.html");

// 3. compile, bundle, and serve scripts
let ctx = await esbuild.context({
	entryPoints: ["src/app.ts"],
	bundle: true,
	sourcemap: true,
	packages: "external",
	format: "iife",
	target: "ES2018",
	outfile: "dist/bundle.js",
	globalName: "bundle",
});

let { port } = await ctx.serve({ servedir: "dist" });
console.log(`Serving http://localhost:${port}/index.html`);
