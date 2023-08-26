import {
  UIButton,
  UICell,
  UIColor,
  UIColumn,
  UIConditional,
  UIOppositeRow,
  UIOutlineButton,
  UIPrimaryButton,
  UIRow,
  UISeparator,
  bound,
} from "desk-frame";
import { pencilIcon, trashIcon } from "~/icons";
import _fields from "./_fields";
import _form from "./_form";

export default UICell.with(
  {
    padding: { x: 16 },
    distribution: "start",
    dimensions: { maxWidth: 760 },
  },

  UIConditional.with(
    { state: bound("mode").matches("view") },
    UIColumn.with(
      _fields,
      UISeparator.with({ margin: 8 }),
      UIOppositeRow.with(
        { height: 60, spacing: 16 },
        UIOutlineButton.with({
          label: "Edit",
          icon: pencilIcon,
          onClick: "StartEdit",
        }),
        UIButton.with({
          label: "Delete",
          icon: trashIcon,
          onClick: "DeleteCompany",
          decoration: {
            background: UIColor.Red,
            textColor: UIColor.Red.text(),
          },
        })
      )
    )
  ),

  UIConditional.with(
    { state: bound("mode").matches("edit") },
    UIColumn.with(
      _form,
      UIRow.with(
        { height: 80 },
        UIPrimaryButton.withLabel("Save", "SaveCompany")
      )
    )
  )
);
