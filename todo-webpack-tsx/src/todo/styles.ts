import {
	UIColor,
	UITextFieldStyle,
	UITheme,
	UIToggleLabelStyle,
} from "@desk-framework/frame-core";

export const ToggleLabel_Uncompleted = UIToggleLabelStyle.extend({
	fontSize: 18,
	padding: { start: 16 },
});
export const ToggleLabel_Completed = UIToggleLabelStyle.extend({
	strikeThrough: true,
	textColor: UIColor["@text"].alpha(0.5),
	fontSize: 18,
	padding: { start: 16 },
});

export const TodoTextField = UITextFieldStyle.extend(
	{
		grow: 1,
		fontSize: 18,
		padding: { y: 8, x: 2 },
		borderColor: "@clear",
		borderThickness: { bottom: 2 },
		borderRadius: 0,
		css: { outline: "none" },
	},
	{
		[UITheme.STATE_FOCUSED]: true,
		borderColor: UIColor["@text"].alpha(0.2),
	},
);
