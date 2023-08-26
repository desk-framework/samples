import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

/** @type import("webpack").Configuration */
export default {
  entry: "./src/hello.js",
  devtool: "eval-source-map",
  devServer: {},
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  output: {
    filename: "hello.js",
    path: path.resolve("./dist"),
    clean: true,
  },
};
