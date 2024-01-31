import {
	Binding,
	UICell,
	UIConditional,
	UIScrollContainer,
	ViewClass,
	ViewComposite,
	bound,
} from "@desk-framework/frame-core";

export const PageListDetailView = ViewComposite.define(
	(p: { hasDetail: Binding<boolean> }, List: ViewClass, Detail: ViewClass) =>
		UICell.with(
			{ layout: { axis: "horizontal" }, position: { gravity: "cover" } },

			// Show only list in narrow viewport, if no detail
			UIConditional.with(
				{
					state: bound("viewport.narrow").and(p.hasDetail.not()),
				},
				UIScrollContainer.with(List),
			),

			// Show only detail in narrow viewport, if detail
			UIConditional.with(
				{
					state: bound("viewport.narrow").and(p.hasDetail),
				},
				UIScrollContainer.with(Detail),
			),

			// Show both list and detail in wide viewport
			UIConditional.with(
				{
					state: bound.not("viewport.narrow"),
				},
				UICell.with(
					{ layout: { distribution: "start", axis: "horizontal" } },
					UICell.with(
						{ cellStyle: { width: "30%", maxWidth: 400 } },
						UIScrollContainer.with(List),
					),
					UICell.with(
						{ cellStyle: { width: "70%" } },
						UIScrollContainer.with(Detail),
					),
				),
			),
		),
);
