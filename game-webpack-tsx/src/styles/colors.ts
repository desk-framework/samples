import { UIColor } from "@desk-framework/frame-core";

export default [
	["primary", UIColor["@orange"]],
	["text", UIColor["@orange"]],
	["background", UIColor["@purple"].brighten(-0.2)],
] as const;
