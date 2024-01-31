import {
	UIButton,
	UIButtonStyle,
	UICell,
	UIColor,
	UIHeading2Label,
	UIRow,
	UISpacer,
	UITheme,
} from "@desk-framework/frame-core";
import { companyIcon, contactIcon } from "~/icons";

const navButtonStyle = UIButtonStyle.extend(
	{
		background: UIColor["@clear"],
		textAlign: "start",
		textColor: UIColor["@text"],
		padding: 16,
		borderRadius: 0,
		grow: 1,
	},
	{
		[UITheme.STATE_HOVERED]: true,
		[UITheme.STATE_DISABLED]: false,
		background: UIColor["@text"].alpha(0.2),
	},
	{
		[UITheme.STATE_PRESSED]: true,
		[UITheme.STATE_DISABLED]: false,
		background: UIColor["@primary"],
		textColor: UIColor["@primary"].text(),
	},
);

export default UICell.with(
	{
		background: UIColor["@background"],
		cellStyle: { width: "95%", maxWidth: 400 },
		margin: { end: "auto" },
		layout: { distribution: "start" },
	},
	UISpacer.withHeight(16),
	UIRow.with({ padding: 16 }, UIHeading2Label.withText("Sample app")),
	UISpacer.withHeight(32),
	UIRow.with(
		UIButton.with({
			icon: contactIcon,
			label: "Contacts",
			navigateTo: "/contacts",
			iconMargin: 32,
			buttonStyle: navButtonStyle,
		}),
	),
	UIRow.with(
		UIButton.with({
			icon: companyIcon,
			label: "Companies",
			navigateTo: "/companies",
			iconMargin: 32,
			buttonStyle: navButtonStyle,
		}),
	),
);
