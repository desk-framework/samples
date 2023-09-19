import {
	StringConvertible,
	UICloseLabel,
	UIColor,
	UIColumn,
	UILabel,
	UIRow,
	UITextField,
	ViewComposite,
	bound,
} from "@desk-framework/frame-core";

export default ViewComposite.define(
	(p: {
		formField: string;
		label: StringConvertible;
		type?: string;
		multiline?: boolean;
		requestFocus?: boolean;
	}) => {
		return UIColumn.with(
			{ spacing: 0 },
			UIRow.with(
				{ padding: { y: 4 } },
				UILabel.withText(p.label, { bold: true }),
			),
			UITextField.with({
				type: p.type,
				multiline: p.multiline,
				formField: p.formField,
				textFieldStyle: {
					width: "100%",
					height: p.multiline ? 120 : undefined,
				},
				requestFocus: p.requestFocus,
			}),
			UICloseLabel.with({
				color: UIColor["@red"],
				position: { gravity: "end", top: 4 },
				hidden: bound.not("formContext.errors." + p.formField),
				text: bound.string("formContext.errors." + p.formField + ".message"),
			}),
		);
	},
	class extends ViewComposite {
		onClick() {
			this.findViewContent(UITextField)[0]?.requestFocus();
		}
	},
);
