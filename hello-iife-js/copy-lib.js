import * as fs from "fs";

const SRC_PATH = "./node_modules/@desk-framework/webcontext/lib/";
const DEST_PATH = "./app/lib/";
const BASE_NAME = "desk-framework-web.es2015.iife.min";

if (!fs.existsSync(DEST_PATH)) {
  console.log(`Creating ${DEST_PATH}...`);
  fs.mkdirSync(DEST_PATH);
}

console.log(`Copying ${SRC_PATH}${BASE_NAME}.js...`);
fs.copyFileSync(SRC_PATH + BASE_NAME + ".js", DEST_PATH + BASE_NAME + ".js");
fs.copyFileSync(
  SRC_PATH + BASE_NAME + ".js.gz",
  DEST_PATH + BASE_NAME + ".js.gz"
);
fs.copyFileSync(
  SRC_PATH + BASE_NAME + ".js.map",
  DEST_PATH + BASE_NAME + ".js.map"
);
