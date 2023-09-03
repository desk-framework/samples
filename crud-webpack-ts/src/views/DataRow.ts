import {
  StringConvertible,
  UILabel,
  UIRow,
  ViewClass,
  ViewComposite,
} from "desk-frame";

export default ViewComposite.define<{ label: StringConvertible }, [ViewClass]>(
  (p, content) =>
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
