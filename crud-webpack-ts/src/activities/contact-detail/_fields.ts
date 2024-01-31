import {
	UIColumn,
	UIConditional,
	UILabel,
	UISeparator,
	bound,
} from "@desk-framework/frame-core";
import DataRow from "~/views/DataRow";
import RecordLinkButton from "~/views/RecordLinkButton";

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
		UIColumn.with(
			{ width: "100%", align: "start" },
			UILabel.with({
				hidden: bound.boolean("contact.company"),
				text: "-",
			}),
			RecordLinkButton.with({
				width: "100%",
				hidden: bound.not("contact.company"),
				label: bound.string("contact.company.name"),
				navigateTo: bound.strf("/companies/%s", "contact.company.id"),
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
			labelStyle: {
				lineBreakMode: "pre-wrap",
				minHeight: 100,
			},
		}),
	),
);
