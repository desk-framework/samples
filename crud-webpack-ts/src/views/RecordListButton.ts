import {
	UIButton,
	UIButtonStyle,
	UIColor,
	UITheme,
} from "@desk-framework/frame-core";

export default UIButton.with({
	buttonStyle: UIButtonStyle.extend(
		{
			width: "100%",
			grow: 1,
			textAlign: "start",
			padding: { x: 16, y: 12 },
			textColor: "inherit",
			background: UIColor["@clear"],
			borderRadius: 2,
		},
		{
			[UITheme.STATE_PRESSED]: true,
			[UITheme.STATE_DISABLED]: false,
			background: UIColor["@primary"],
			textColor: UIColor["@primary"].text(),
		},
	),
});
