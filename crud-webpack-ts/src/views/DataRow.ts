import { StringConvertible, UILabel, UIRow, View, ViewClass } from "desk-frame";

export default View.compose(
  (p: { label: StringConvertible }, content: ViewClass) =>
    UIRow.with(
      { padding: { y: 12 } },
      UILabel.with({
        text: p.label,
        textStyle: { bold: true },
        dimensions: { width: "25%", maxWidth: 200, grow: 0, shrink: 0 },
        position: { gravity: "baseline" },
      }),
      content
    )
);
