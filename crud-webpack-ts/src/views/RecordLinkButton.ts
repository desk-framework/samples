import {
	UIButton,
	UIColor,
	UIPlainButtonStyle,
	UITheme,
} from "@desk-framework/frame-core";

export default UIButton.with({
	chevron: "next",
	chevronSize: 24,
	chevronColor: UIColor["@text"].alpha(0.5),
	buttonStyle: UIPlainButtonStyle.extend(
		{
			textAlign: "start",
			grow: 1,
			padding: { y: 4 },
			css: { whiteSpace: "collapse" },
		},
		{
			[UITheme.STATE_HOVERED]: true,
			[UITheme.STATE_DISABLED]: false,
			background: UIColor["@clear"],
		},
		{
			[UITheme.STATE_PRESSED]: true,
			[UITheme.STATE_DISABLED]: false,
			background: UIColor["@clear"],
		},
	),
});
