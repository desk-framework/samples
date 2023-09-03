import {
	UIBorderlessButton,
	UIConditional,
	UIHeading2,
	UIIcon,
	UIIconButton,
	UIRow,
	UISpacer,
	bound,
} from "desk-frame";

export default UIRow.with(
	{ padding: 16, spacing: 0 },

	UIConditional.with(
		{
			state: bound
				.boolean("viewport.narrow")
				.and("masterDetailState.detailActivity"),
		},
		UIRow.with(
			UIIconButton.with({
				icon: UIIcon.ExpandLeft,
				iconSize: 24,
				onClick: "GoBack",
			}),
			UISpacer.withWidth(4),
		),
	),

	UIConditional.with(
		{
			state: bound
				.boolean("viewport.narrow")
				.and("masterDetailState.detailActivity")
				.not(),
		},
		UIRow.with(
			UIIconButton.with({
				icon: UIIcon.Menu,
				iconSize: 24,
				onClick: "ShowMenu",
				accessibleLabel: "Main menu",
			}),
			UISpacer.withWidth(4),
		),
	),

	UIHeading2.with({
		text: bound
			.boolean("viewport.narrow")
			.and("masterDetailState.detailActivity.title")
			.or("masterDetailState.masterActivity.title"),
		icon: bound("masterDetailState.detailActivity.icon").or(
			"masterDetailState.masterActivity.icon",
		),
		iconSize: 24,
	}),
	UISpacer,

	UIRow.with(
		UIBorderlessButton.with({
			icon: UIIcon.Plus,
			label: bound("viewport.narrow").select("", "New contact"),
			accessibleLabel: "New contact",
			onClick: "ShowNewContact",
		}),
	),
);
