import {
	UICell,
	UIColor,
	UIColumn,
	UIHeading3,
	UIOppositeRow,
	UIOutlineButton,
	UIPrimaryButton,
	UIRow,
	UISpacer,
} from "desk-frame";
import LabeledTextField from "~/views/LabeledTextField";

export default UICell.with(
	{
		background: UIColor.Background,
		margin: { top: 32, bottom: "auto" },
		dimensions: { width: "100%", maxWidth: 480 },
		padding: 16,
		borderRadius: 8,
	},
	UIColumn.with(
		{ spacing: 8, onEnterKeyPress: "Save" },
		UIRow.with(UIHeading3.withText("New contact")),
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
	UISpacer.withHeight(16),
	UIOppositeRow.with(
		UIOutlineButton.withLabel("Cancel", "Close"),
		UIPrimaryButton.withLabel("Save", "Save"),
	),
);
