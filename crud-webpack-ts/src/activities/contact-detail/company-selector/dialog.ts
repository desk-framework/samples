import {
	UIButton,
	UICell,
	UICellStyle,
	UIColor,
	UIColumn,
	UILabel,
	UIList,
	UIPrimaryButton,
	UIPrimaryButtonStyle,
	UIRow,
	UIScrollContainer,
	UISeparator,
	UITextField,
	bound,
} from "@desk-framework/frame-core";
import { companyIcon } from "~/icons";

const ListCellStyle = UICellStyle.extend({
	borderRadius: 2,
	padding: { x: 8, y: 4 },
	css: { cursor: "pointer" },
});
const SelectedListCellStyle = ListCellStyle.extend({
	background: UIColor["@primary"],
	textColor: UIColor["@primary"].text(),
});

export default UICell.with(
	{ padding: 16, cellStyle: { width: 650, maxWidth: "100vw" } },
	UIColumn.with(
		{ spacing: 8 },
		UITextField.with({
			placeholder: "Enter company name",
			width: "100%",
			requestFocus: true,
			value: bound.string("companyName"),
			onInput: "NameFieldUpdated",
			onEnterKeyPress: "Confirm",
			onArrowDownKeyPress: "FocusList",
		}),
		UISeparator,
		UICell.with(
			{
				cellStyle: { height: 200 },
				layout: { distribution: "start" },
			},
			UIScrollContainer.with(
				{ position: { gravity: "cover" } },
				UIList.with(
					{
						items: bound.list("filteredCompanies"),
						allowKeyboardFocus: true,
					},
					UICell.with(
						{
							cellStyle: bound("selectedCompany")
								.equals("item")
								.select(SelectedListCellStyle, ListCellStyle),
							allowFocus: true,
							onFocusIn: "+SelectListItem",
							onArrowDownKeyPress: "FocusNext",
							onArrowUpKeyPress: "FocusPrevious",
							onEnterKeyPress: "Confirm",
						},
						UIRow.with(
							UILabel.with({
								text: bound.string("item.name"),
								icon: companyIcon,
								iconSize: 20,
								iconMargin: 16,
								labelStyle: { grow: 1 },
							}),
						),
					),
				),
			),
		),
		UIRow.with(
			UIButton.with({
				label: "Cancel",
				onClick: "Cancel",
				buttonStyle: { shrink: 1, width: "50%" },
			}),
			UIPrimaryButton.with({
				label: bound("selectedCompany.id").select("Select", "Confirm"),
				disabled: bound("companyName").not(),
				onClick: "Confirm",
				buttonStyle: UIPrimaryButtonStyle.override({ shrink: 1, width: "50%" }),
			}),
		),
	),
);
