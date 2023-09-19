import { UIForm, bound } from "@desk-framework/frame-core";
import LabeledTextField from "~/views/LabeledTextField";

export default UIForm.with(
	{ formContext: bound("companyFormContext"), spacing: 8 },
	LabeledTextField.with({
		formField: "name",
		label: "Name",
		requestFocus: true,
	}),
	LabeledTextField.with({
		formField: "notes",
		label: "Notes",
		multiline: true,
	}),
);
