import {
	UIAnimationController,
	UICell,
	UIColor,
	UIConditional,
	UILabel,
	UIScrollContainer,
	UIViewRenderer,
	bound,
} from "@desk-framework/frame-core";
import _header from "./_header";

export default UICell.with(
	{
		layout: { distribution: "start" },
		cellStyle: { shrink: 1 },
	},
	_header,

	UICell.with(
		{
			layout: { axis: "horizontal" },
			cellStyle: { shrink: 1 },
		},
		UIConditional.with(
			{ state: bound.not("viewport.narrow") },
			UICell.with(
				{
					cellStyle: {
						width: "30vw",
						maxWidth: 340,
						grow: 0,
						borderColor: UIColor["@separator"].alpha(0.5),
						borderThickness: { end: 1 },
					},
					layout: { distribution: "start" },
				},
				UIScrollContainer.with(
					{ padding: 8 },
					UIViewRenderer.with({
						view: bound("masterDetailState.masterActivity"),
					}),
				),
			),
		),

		UIScrollContainer.with(
			{
				padding: bound("viewport.narrow").select(0, { x: 16 }),
			},
			UIAnimationController.with(
				{ showAnimation: "@fade-in-right" },
				UIConditional.with(
					{
						state: bound
							.boolean("viewport.narrow")
							.and(bound("masterDetailState.detailActivity").not()),
					},
					UIViewRenderer.with({
						view: bound("masterDetailState.masterActivity"),
					}),
				),
			),
			UIAnimationController.with(
				{ showAnimation: "@fade-in-left" },
				UIViewRenderer.with({
					view: bound("masterDetailState.detailActivity"),
				}),
			),
			UIConditional.with(
				{
					state: bound
						.boolean("viewport.narrow")
						.or("masterDetailState.detailActivity")
						.not(),
				},
				UICell.with(
					{ margin: { bottom: "30vh" } },
					UILabel.withText("No contact selected", {
						textColor: UIColor["@text"].alpha(0.35),
						fontSize: 24,
					}),
				),
			),
		),
	),
);
