import * as path from "path";
import { spawnSync } from "child_process";

/** @type import("webpack").Configuration */
export default {
	mode: "development",
	entry: "./src/app.test.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.svg$/i,
				type: "asset/source",
			},
		],
	},
	resolve: {
		alias: { "~": path.resolve("./src") },
		extensions: [".tsx", ".ts", ".js"],
		extensionAlias: { ".js": [".ts", ".tsx", ".js"] },
	},
	output: {
		filename: "test.js",
		path: path.resolve("./.test-run"),
		clean: true,
	},
	stats: "errors-warnings",
	plugins: [
		(compiler) => {
			compiler.hooks.done.tap("TestPlugin", () => {
				setTimeout(() => {
					console.log("\n=== Running tests...");
					let ret = spawnSync("node", [".test-run/test"], {
						stdio: ["ignore", "inherit", "inherit"],
					});
					if (ret.status && !compiler.options.watch) {
						process.exit(1);
					}
				}, 0);
			});
		},
	],
};
