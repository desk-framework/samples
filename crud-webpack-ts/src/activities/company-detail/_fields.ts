import {
	UIColumn,
	UIConditional,
	UILabel,
	UILinkButton,
	UIList,
	UIRow,
	UISeparator,
	bound,
} from "desk-frame";
import DataRow from "~/views/DataRow";
import { contactIcon } from "~/icons";

export default UIColumn.with(
	{ spacing: 0 },
	UIConditional.with(
		{ state: bound.not("viewport.narrow") },
		UIColumn.with(
			{ spacing: 0 },
			DataRow.with(
				{ label: "Name" },
				UILabel.withText(bound.string("company.name").else("-"), {
					lineBreakMode: "pre-wrap",
				}),
			),
			UISeparator,
		),
	),
	DataRow.with(
		{ label: "Notes" },
		UILabel.with({
			text: bound.string("company.notes").else("-"),
			textStyle: {
				lineBreakMode: "pre-wrap",
			},
			dimensions: { minHeight: 100 },
		}),
	),
	UISeparator,
	DataRow.with(
		{ label: "Contacts" },
		UIList.with(
			{ items: bound.list("contacts") },
			UIRow.with(
				{ padding: 4 },
				UILinkButton.with({
					label: bound.string("item.fullName"),
					decoration: { padding: { y: 4, x: 0 } },
					textStyle: { lineBreakMode: "ellipsis" },
					icon: contactIcon,
					shrinkwrap: false,
					navigateTo: bound.strf("/contact/%s", "item.id"),
				}),
			),
			UIColumn.with({
				dimensions: { grow: 1, shrink: 1 },
				layout: { clip: true },
			}),
		),
	),
);
