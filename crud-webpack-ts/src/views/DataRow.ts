import {
	StringConvertible,
	UILabel,
	UIRow,
	ViewClass,
	ViewComposite,
} from "@desk-framework/frame-core";

export default ViewComposite.define(
	(p: { label: StringConvertible }, content: ViewClass) =>
		UIRow.with(
			{ padding: { y: 12 } },
			UILabel.with({
				text: p.label,
				position: { gravity: "baseline" },
				labelStyle: {
					bold: true,
					width: "25%",
					maxWidth: 200,
					grow: 0,
					shrink: 0,
					padding: { y: 8 },
				},
			}),
			content,
		),
);
