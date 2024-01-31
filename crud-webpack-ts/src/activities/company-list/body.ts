import {
	UICell,
	UIColumn,
	UIConditional,
	UILabel,
	UIList,
	UIViewRenderer,
	bound,
} from "@desk-framework/frame-core";
import { PageListDetailView } from "~/views/PageListDetailView";
import RecordListButton from "~/views/RecordListButton";

export default PageListDetailView.with(
	{ hasDetail: bound("detailActivity") },

	// list view
	UIColumn.with(
		UIList.with(
			{ items: bound.list("companies"), allowKeyboardFocus: true },
			RecordListButton.with({
				label: bound.string("item.name"),
				pressed: bound("item.id").equals("detailActivity.company.id"),
				navigateTo: bound.string("item.id").strf("/companies/%s"),
				chevron: "next",
				chevronSize: 20,
				disableKeyboardFocus: true,
				onArrowUpKeyPress: "FocusPrevious",
				onArrowDownKeyPress: "FocusNext",
			}),
		),
	),

	// detail view: either the contact detail view or a placeholder
	UICell.with(
		UIViewRenderer.with({ view: bound("detailActivity.view") }),
		UIConditional.with(
			{ state: bound.not("detailActivity") },
			UICell.with(
				{ cellStyle: { padding: { bottom: "20vh" } } },
				UILabel.withText("Select a company to view details", {
					opacity: 0.3,
				}),
			),
		),
	),
);
