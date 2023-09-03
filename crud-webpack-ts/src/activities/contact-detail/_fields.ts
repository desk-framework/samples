import {
	UIColumn,
	UIConditional,
	UIIcon,
	UILabel,
	UILinkButton,
	UIRow,
	UISeparator,
	bound,
} from "desk-frame";
import DataRow from "~/views/DataRow";

export default UIColumn.with(
	{ spacing: 0 },
	UIConditional.with(
		{ state: bound.not("viewport.narrow") },
		UIColumn.with(
			{ spacing: 0 },
			DataRow.with(
				{ label: "Name" },
				UILabel.withText(bound.string("contact.fullName").else("-"), {
					lineBreakMode: "pre-wrap",
				}),
			),
			UISeparator,
		),
	),
	DataRow.with(
		{ label: "Company" },
		UIRow.with(
			{ spacing: 0, dimensions: { grow: 1 } },
			UILabel.with({
				hidden: bound.boolean("contact.company"),
				text: "-",
			}),
			UILinkButton.with({
				hidden: bound.not("contact.company"),
				label: bound.string("contact.company.name"),
				decoration: { padding: { y: 4, x: 0 } },
				icon: UIIcon.ExpandRight,
				iconAfter: true,
				shrinkwrap: false,
				navigateTo: bound.strf("/company/%s", "contact.company.id"),
			}),
		),
	),
	UISeparator,
	DataRow.with(
		{ label: "Email" },
		UILabel.withText(bound.string("contact.email").else("-"), {
			lineBreakMode: "pre-wrap",
		}),
	),
	UISeparator,
	DataRow.with(
		{ label: "Phone" },
		UILabel.withText(bound.string("contact.phone").else("-"), {
			lineBreakMode: "pre-wrap",
		}),
	),
	UISeparator,
	DataRow.with(
		{ label: "Notes" },
		UILabel.with({
			text: bound.string("contact.notes").else("-"),
			textStyle: {
				lineBreakMode: "pre-wrap",
			},
			dimensions: { minHeight: 100 },
		}),
	),
);
