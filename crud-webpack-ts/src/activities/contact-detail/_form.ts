import {
  UIButton,
  UIColor,
  UIColumn,
  UIForm,
  UIIcon,
  UIIconButton,
  UILabel,
  UIRow,
  UIStyleController,
  bound,
} from "desk-frame";
import LabeledTextField from "~/views/LabeledTextField";

export default UIForm.with(
  { formContext: bound("contactFormContext"), spacing: 8 },
  LabeledTextField.with({
    formField: "fullName",
    label: "Name",
    requestFocus: true,
  }),
  UIColumn.with(
    { spacing: 0 },
    UIRow.with(
      { padding: { y: 4 } },
      UILabel.withText("Company", { bold: true })
    ),
    UIRow.with(
      UIStyleController.with(
        {
          textStyle: { color: UIColor.Text.alpha(0.5) },
          state: bound.not("contact.company"),
        },
        UIButton.with({
          shrinkwrap: false,
          decoration: {
            borderColor: UIColor.ControlBase.contrast(-0.2),
            borderThickness: 1,
          },
          textStyle: { align: "start" },
          label: bound.string("contact.company.name").else("(None)"),
          icon: UIIcon.ExpandRight,
          onClick: "ShowCompanySelector",
        })
      ),
      UIIconButton.with({
        icon: UIIcon.Close,
        onClick: "ClearCompany",
      })
    )
  ),
  LabeledTextField.with({
    formField: "email",
    label: "Email",
    type: "email",
  }),
  LabeledTextField.with({
    formField: "phone",
    label: "Phone",
    type: "tel",
  }),
  LabeledTextField.with({
    formField: "notes",
    label: "Notes",
    multiline: true,
  })
);
