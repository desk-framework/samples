import {
  UIAnimationController,
  UICell,
  UIColor,
  UIConditional,
  UILabel,
  UIScrollContainer,
  UIViewRenderer,
  bound,
} from "desk-frame";
import _header from "./_header";

export default UICell.with(
  {
    distribution: "start",
    dimensions: { shrink: 1 },
  },
  _header,

  UICell.with(
    { layout: { axis: "horizontal" }, dimensions: { shrink: 1 } },

    UIConditional.with(
      { state: bound.not("viewport.narrow") },
      UICell.with(
        {
          dimensions: { width: "30vw", maxWidth: 340, grow: 0 },
          borderColor: UIColor.Separator.alpha(0.5),
          borderThickness: { end: 1 },
          distribution: "start",
        },
        UIScrollContainer.with(
          { padding: 8 },
          UIViewRenderer.with({
            view: bound("masterDetailState.masterActivity"),
          })
        )
      )
    ),

    UIScrollContainer.with(
      {
        padding: bound("viewport.narrow").select(0, { x: 16 }),
      },
      UIAnimationController.with(
        { showAnimation: "fade-in-right" },
        UIConditional.with(
          {
            state: bound
              .boolean("viewport.narrow")
              .and(bound("masterDetailState.detailActivity").not()),
          },
          UIViewRenderer.with({
            view: bound("masterDetailState.masterActivity"),
          })
        )
      ),
      UIAnimationController.with(
        { showAnimation: "fade-in-left" },
        UIViewRenderer.with({
          view: bound("masterDetailState.detailActivity"),
        })
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
            color: UIColor.Text.alpha(0.35),
            fontSize: 24,
          })
        )
      )
    )
  )
);
