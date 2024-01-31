import {
	UIColumn,
	UIForm,
	UIIconButton,
	UILabel,
	UIRow,
	UITextField,
	bound,
} from "@desk-framework/frame-core";
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
			UILabel.withText("Company", { bold: true }),
		),
		UIRow.with(
			UITextField.with({
				value: bound.string("contact.company.name").else("(None)"),
				readOnly: true,
				onClick: "ShowCompanySelector",
				onEnterKeyPress: "ShowCompanySelector",
				width: "100%",
				textFieldStyle: {
					css: { cursor: "pointer" },
				},
			}),
			UIIconButton.with({
				icon: "@close",
				iconSize: 20,
				onClick: "ClearCompany",
			}),
		),
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
	}),
);
