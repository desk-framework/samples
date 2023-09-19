import {
	UIColumn,
	UIConditional,
	UILabel,
	UIList,
	UIRow,
	UISeparator,
	bound,
} from "@desk-framework/frame-core";
import { contactIcon } from "~/icons";
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
			labelStyle: {
				lineBreakMode: "pre-wrap",
				minHeight: 100,
			},
		}),
	),
	UISeparator,
	DataRow.with(
		{ label: "Contacts" },
		UIList.with(
			{ items: bound.list("contacts") },
			UIRow.with(
				{ padding: 4 },
				RecordLinkButton.with({
					label: bound.string("item.fullName"),
					icon: contactIcon,
					iconSize: 20,
					iconMargin: 8,
					navigateTo: bound.strf("/contact/%s", "item.id"),
				}),
			),
			UIColumn.with({
				width: "100%",
				layout: { clip: true },
			}),
		),
	),
);
