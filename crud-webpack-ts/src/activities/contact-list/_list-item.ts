import {
	UIColor,
	UIIcon,
	UILinkButton,
	UIStyle,
	UIStyleController,
	bound,
} from "desk-frame";

export default UIStyleController.with(
	{
		state: bound("item.id").equals(
			"masterDetailState.detailActivity.contact.id",
		),
		decoration: {
			background: UIColor.Primary.alpha(0.2),
			textColor: UIColor.Primary,
		},
		textStyle: { bold: true },
	},
	UILinkButton.with({
		label: bound.string("item.fullName"),
		navigateTo: bound.string("item.id").strf("/contact/%s"),
		shrinkwrap: false,
		icon: UIIcon.ExpandRight,
		iconAfter: true,
		iconSize: 20,
		dimensions: { width: "100%" },
		decoration: {
			padding: { x: 16, y: 12 },
			textColor: "inherit",
			background: UIColor.Transparent,
		},
		style: UIStyle.Button.extend({
			textStyle: { align: "start" },
		}),
		disableKeyboardFocus: true,
		onArrowUpKeyPress: "FocusPrevious",
		onArrowDownKeyPress: "FocusNext",
	}),
);
