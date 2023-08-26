import {
  UIButton,
  UICell,
  UIColor,
  UIHeading2,
  UIRow,
  UISpacer,
  UIStyle,
} from "desk-frame";
import { companyIcon, contactIcon } from "~/icons";

const navButtonStyle = UIStyle.Button.extend(
  {
    textStyle: { align: "start" },
    decoration: { textColor: UIColor.Text, padding: 16, borderRadius: 0 },
  },
  {
    hover: { decoration: { background: UIColor.Text.alpha(0.2) } },
    pressed: {
      decoration: {
        background: UIColor.Primary,
        textColor: UIColor.Primary.text(),
      },
    },
  }
);

export default UICell.with(
  {
    background: UIColor.Background,
    dimensions: { width: "95%", maxWidth: 400 },
    margin: { end: "auto" },
    distribution: "start",
  },
  UISpacer.withHeight(16),
  UIRow.with({ padding: 16 }, UIHeading2.withText("Sample app")),
  UISpacer.withHeight(32),
  UIRow.with(
    UIButton.with({
      icon: contactIcon,
      shrinkwrap: false,
      label: "Contacts",
      navigateTo: "/",
      iconMargin: 32,
      style: navButtonStyle,
    })
  ),
  UIRow.with(
    UIButton.with({
      icon: companyIcon,
      shrinkwrap: false,
      label: "Companies",
      navigateTo: "/companies",
      iconMargin: 32,
      style: navButtonStyle,
    })
  )
);
