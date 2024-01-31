import {
	Activity,
	UIList,
	UITextField,
	ViewEvent,
	app,
} from "@desk-framework/frame-core";
import { Company } from "~/models/Company";
import type { ContactsService } from "~/services/ContactsService";
import dialog from "./dialog";

export default class CompanySelectorDialog extends Activity {
	constructor(company?: Company) {
		super();
		this.selectedCompany = company;
		this.companyName = company?.name || "";
	}

	companyName: string;
	selectedCompany?: Company;

	allCompanies: Company[] = [];
	filteredCompanies: Company[] = [];

	instance = Math.random();

	protected ready() {
		let contacts = app.services.get("ContactsService") as ContactsService;
		this.allCompanies = contacts
			.getAllCompanies()
			.filter((c) => c.name)
			.sort((a, b) => (b > a ? 1 : -1));
		this.filteredCompanies = this.allCompanies;

		this.view = new dialog();
		app.showDialog(this.view);
	}

	onCancel() {
		this.unlink();
	}

	onEscapeKeyPress() {
		this.unlink();
	}

	onFocusList() {
		this.findViewContent(UIList)[0]?.requestFocus();
	}

	onSelectListItem(e: UIList.ItemEvent<Company>) {
		if (e.delegate.item instanceof Company) {
			this.selectedCompany = e.delegate.item;
			this.companyName = this.selectedCompany.name || "";
		}
	}

	onNameFieldUpdated(e: ViewEvent<UITextField>) {
		let value = (this.companyName = e.source.value);
		let lcValue = value.toLowerCase();
		this.filteredCompanies = this.allCompanies.filter(
			(c) => c.name?.toLowerCase().indexOf(lcValue)! >= 0,
		);
		let match = this.filteredCompanies.filter(
			(c) => c.name?.toLowerCase() === lcValue,
		);
		this.selectedCompany = match[0] || undefined;
	}

	onConfirm() {
		if (!this.selectedCompany) {
			if (this.companyName) {
				this.selectedCompany = Company.create({ name: this.companyName });
			} else {
				this.selectedCompany = undefined;
			}
		}
		this.emit("Confirm");
		this.unlink();
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, CompanySelectorDialog);
}
