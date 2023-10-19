import {
	UICellStyle,
	UIColor,
	UILabelStyle,
	UIPlainButtonStyle,
	UITextFieldStyle,
	UITheme,
} from "@desk-framework/frame-core";

export default {
	GameIconButton: UIPlainButtonStyle.extend({
		minWidth: "2em",
	}),
	TimerLabel: UILabelStyle.extend({
		textAlign: "center",
		minWidth: "5em",
	}),
	SumText: UILabelStyle.extend({
		fontSize: "3em",
	}),
	OperandText: UILabelStyle.extend({
		fontSize: "3.5em",
		textAlign: "center",
		minWidth: "2em",
	}),
	AnswerText: UILabelStyle.extend({
		fontSize: "3.5em",
		textAlign: "center",
		minWidth: "3em",
	}),
	AnswerField: UITextFieldStyle.extend(
		{
			fontSize: "3.5em",
			textAlign: "center",
			background: UIColor["@clear"],
			borderColor: UIColor["@text"],
			borderThickness: { bottom: 2 },
			borderRadius: 0,
			maxWidth: "3em",
			css: { outline: "none" },
		},
		{
			[UITheme.STATE_HOVERED]: true,
			[UITheme.STATE_DISABLED]: false,
			[UITheme.STATE_READONLY]: false,
			borderColor: UIColor["@text"],
		},
	),
	SettingsDialog: UICellStyle.extend({
		width: "100%",
		maxWidth: 400,
		padding: 32,
	}),
	SettingsNumberInputField: UITextFieldStyle.extend({
		textAlign: "end",
		maxWidth: "4em",
	}),
};
