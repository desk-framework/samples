import {
  StringConvertible,
  UICloseLabel,
  UIColor,
  UIColumn,
  UILabel,
  UIRow,
  UITextField,
  View,
  bound,
} from "desk-frame";

export default View.compose(
  (p: {
    formField: string;
    label: StringConvertible;
    type?: string;
    multiline?: boolean;
    requestFocus?: boolean;
  }) => {
    return UIColumn.with(
      { spacing: 0 },
      UIRow.with(
        { padding: { y: 4 } },
        UILabel.withText(p.label, { bold: true })
      ),
      UITextField.with({
        formField: p.formField,
        dimensions: { width: "100%", height: p.multiline ? 120 : undefined },
        requestFocus: p.requestFocus,
        type: p.type,
        multiline: p.multiline,
      }),
      UICloseLabel.with({
        textStyle: { color: UIColor.Red },
        position: { gravity: "end", top: 4 },
        hidden: bound.not("formContext.errors." + p.formField),
        text: bound.string("formContext.errors." + p.formField + ".message"),
      })
    );
  },
  {
    onClick() {
      this.findViewContent(UITextField)[0]?.requestFocus();
    },
  }
);
