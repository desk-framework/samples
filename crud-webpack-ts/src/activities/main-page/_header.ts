import {
	UIConditional,
	UIHeading3Label,
	UIIconButton,
	UIPlainButton,
	UIRow,
	UISpacer,
	bound,
} from "@desk-framework/frame-core";

export default UIRow.with(
	{ padding: 16, spacing: 0 },

	// Show back arrow if we're on a detail page in narrow viewport
	UIConditional.with(
		{
			state: bound.boolean("viewport.narrow").and("navigationPath.detail"),
		},
		UIRow.with(
			UIIconButton.with({
				icon: "@chevronBack",
				iconSize: 24,
				onClick: "GoBack",
			}),
			UISpacer.withWidth(4),
		),
	),

	// Show menu button if we're not on a detail page in narrow viewport
	UIConditional.with(
		{
			state: bound
				.boolean("viewport.narrow")
				.and("navigationPath.detail")
				.not(),
		},
		UIRow.with(
			UIIconButton.with({
				icon: "@menu",
				iconSize: 24,
				onClick: "ShowMenu",
				accessibleLabel: "Main menu",
			}),
			UISpacer.withWidth(4),
		),
	),

	// Show heading from detail or page title
	UIHeading3Label.with({
		text: bound("viewport.narrow")
			.and("activePage.detailActivity.title")
			.or("activePage.title"),
		icon: bound("icon"),
		iconSize: 24,
	}),
	UISpacer,

	UIRow.with(
		UIPlainButton.with({
			icon: "@plus",
			label: bound("viewport.narrow").select("", "New contact"),
			accessibleLabel: "New contact",
			onClick: "ShowNewContact",
		}),
	),
);
