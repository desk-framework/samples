import {
	UICell,
	UIColor,
	UIColumn,
	UIExpandedLabel,
	UIList,
	UIOutlineButton,
	UIPrimaryButton,
	UIRow,
	UIScrollContainer,
	UISelectionController,
	UIStyle,
	UITextField,
	bound,
} from "desk-frame";
import { companyIcon } from "~/icons";

const _listCellStyle = UIStyle.Cell.extend(
	{ decoration: { borderRadius: 8, css: { cursor: "pointer" } } },
	{
		selected: {
			decoration: {
				background: UIColor.Primary,
				textColor: UIColor.Primary.text(),
			},
		},
	},
);

export default UICell.with(
	{
		background: UIColor.Background,
		padding: { x: 16, y: 20 },
		borderRadius: 16,
		dimensions: { grow: 0, width: "100%", maxWidth: 540 },
		position: { gravity: "center" },
		onEscapeKeyPress: "CloseModal",
	},
	UIColumn.with(
		{ spacing: 8 },
		UITextField.with({
			placeholder: "Enter company name",
			dimensions: { width: "100%" },
			requestFocus: true,
			value: bound.string("companyName"),
			onInput: "NameFieldUpdated",
			onEnterKeyPress: "Confirm",
			onArrowDownKeyPress: "FocusList",
		}),
		UICell.with(
			{
				dimensions: { height: 200 },
				distribution: "start",
			},
			UIScrollContainer.with(
				{ position: { gravity: "cover" } },
				UISelectionController.with(
					UIList.with(
						{
							items: bound.list("filteredCompanies"),
							allowKeyboardFocus: true,
						},
						UICell.with(
							{
								padding: { x: 12, y: 4 },
								style: _listCellStyle,
								allowFocus: true,
								onFocusIn: "Select",
								onSelect: "+SelectListItem",
								onArrowDownKeyPress: "FocusNext",
								onArrowUpKeyPress: "FocusPrevious",
								onEnterKeyPress: "Confirm",
							},
							UIRow.with(
								UIExpandedLabel.with({
									text: bound.string("item.name"),
									icon: companyIcon,
								}),
							),
						),
					),
				),
			),
		),
		UIRow.with(
			UIOutlineButton.with({
				label: "Cancel",
				shrinkwrap: false,
				onClick: "CloseModal",
			}),
			UIPrimaryButton.with({
				shrinkwrap: false,
				label: bound("selectedCompany.id").select("Select", "Confirm"),
				disabled: bound("companyName").not(),
				onClick: "Confirm",
			}),
		),
	),
);
