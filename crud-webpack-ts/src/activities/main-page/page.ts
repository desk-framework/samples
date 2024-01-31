import { UICell, UIViewRenderer, bound } from "@desk-framework/frame-core";
import _header from "./_header";

export default UICell.with(
	{
		layout: { distribution: "start" },
		cellStyle: { shrink: 1 },
	},
	_header,

	UICell.with(
		UIViewRenderer.with({
			view: bound("activePage.view"),
		}),
	),
);
