import {
	UIButton,
	UICell,
	UIColumn,
	UIConditional,
	UIPlainButton,
	UIPrimaryButton,
	UIRow,
	UISeparator,
	bound,
} from "@desk-framework/frame-core";
import _fields from "./_fields";
import _form from "./_form";
import { pencilIcon, trashIcon } from "~/icons";
import DangerButton from "~/views/DangerButton";

export default UICell.with(
	{
		layout: { distribution: "start" },
		cellStyle: { maxWidth: 760, padding: { x: 16 } },
	},

	UIConditional.with(
		{ state: bound("mode").matches("view") },
		UIColumn.with(
			_fields,
			UISeparator.with({ margin: 8 }),
			UIRow.with(
				{
					align: "end",
					height: 80,
					spacing: 16,
				},
				UIPlainButton.with({
					label: "Edit",
					icon: pencilIcon,
					onClick: "StartEdit",
				}),
				DangerButton.with({
					label: "Delete",
					icon: trashIcon,
					onClick: "DeleteContact",
				}),
			),
		),
	),

	UIConditional.with(
		{ state: bound("mode").matches("edit") },
		UIColumn.with(
			_form,
			UIRow.with(
				{ height: 80 },
				UIPrimaryButton.withLabel("Save", "SaveContact"),
				UIButton.withLabel("Cancel", "CancelEdit"),
			),
		),
	),
);
