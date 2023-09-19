import {
	UIButton,
	UIColumn,
	UIHeading2Label,
	UIPrimaryButton,
	UIRow,
	UISpacer,
} from "@desk-framework/frame-core";
import LabeledTextField from "~/views/LabeledTextField";
import PopupDialogCell from "~/views/PopupDialogCell";

export default PopupDialogCell.with(
	{ margin: { top: 32, bottom: "auto" } },
	UIColumn.with(
		{ spacing: 8, onEnterKeyPress: "Save" },
		UIRow.with(UIHeading2Label.withText("New contact")),
		LabeledTextField.with({
			formField: "fullName",
			label: "Name",
			requestFocus: true,
		}),
		LabeledTextField.with({
			formField: "email",
			label: "Email",
		}),
	),
	UISpacer.withHeight(32),
	UIRow.with(
		{ align: "end" },
		UIButton.withLabel("Cancel", "Close"),
		UIPrimaryButton.withLabel("Save", "Save"),
	),
);
