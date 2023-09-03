import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

/** @type import("webpack").Configuration */
export default {
	entry: "./src/app.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		alias: { "~": path.resolve("./src") },
		extensions: [".tsx", ".ts", ".js"],
		extensionAlias: { ".js": [".ts", ".tsx", ".js"] },
	},
	devtool: "eval-source-map",
	devServer: {},
	plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
	output: {
		filename: "bundle.js",
		path: path.resolve("./dist"),
		clean: true,
	},
};
