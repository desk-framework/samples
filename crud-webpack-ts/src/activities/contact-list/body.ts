import {
	UIButton,
	UIButtonStyle,
	UIColor,
	UIColumn,
	UIList,
	UITheme,
	bound,
} from "@desk-framework/frame-core";

const ListButtonStyle = UIButtonStyle.extend(
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
);

export default UIColumn.with(
	UIList.with(
		{ items: bound.list("contacts"), allowKeyboardFocus: true },
		UIButton.with({
			label: bound.string("item.fullName"),
			pressed: bound("item.id").equals(
				"masterDetailState.detailActivity.contact.id",
			),
			navigateTo: bound.string("item.id").strf("/contact/%s"),
			chevron: "next",
			chevronSize: 20,
			buttonStyle: ListButtonStyle,
			disableKeyboardFocus: true,
			onArrowUpKeyPress: "FocusPrevious",
			onArrowDownKeyPress: "FocusNext",
		}),
	),
);
