import * as fs from "fs";

const SRC_PATH = "./node_modules/@desk-framework/frame-web/lib/";
const DEST_PATH = "./app/lib/";
const BASE_NAME = "desk-framework-web.es2020.esm.min";

if (!fs.existsSync(DEST_PATH)) {
	console.log(`Creating ${DEST_PATH}...`);
	fs.mkdirSync(DEST_PATH);
}

console.log(`Copying ${SRC_PATH}${BASE_NAME}.js...`);
fs.copyFileSync(SRC_PATH + BASE_NAME + ".js", DEST_PATH + BASE_NAME + ".js");
fs.copyFileSync(
	SRC_PATH + BASE_NAME + ".js.gz",
	DEST_PATH + BASE_NAME + ".js.gz",
);
fs.copyFileSync(
	SRC_PATH + BASE_NAME + ".js.map",
	DEST_PATH + BASE_NAME + ".js.map",
);

console.log(`Writing ${DEST_PATH}.d.ts`);
fs.writeFileSync(
	DEST_PATH + BASE_NAME + ".d.ts",
	`export * from "@desk-framework/webcontext"`,
);
