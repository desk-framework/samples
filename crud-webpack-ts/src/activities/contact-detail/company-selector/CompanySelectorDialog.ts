import {
	DialogViewActivity,
	UIList,
	UITextField,
	UITheme,
	ViewEvent,
	app,
} from "@desk-framework/frame-core";
import { Company } from "~/models/Company";
import type { ContactsService } from "~/services/ContactsService";
import dialog from "./dialog";

let contacts = app.services.observeService<ContactsService>("ContactsService");

export default class CompanySelectorDialog extends DialogViewActivity {
	static ViewBody = dialog;

	constructor(company?: Company) {
		super();
		this.selectedCompany = company;
		this.companyName = company?.name || "";
		this.renderPlacement = {
			mode: "modal",
			shade: UITheme.getModalDialogShadeOpacity(),
			transform: { show: "@fade-in-up", hide: "@fade-out-down" },
		};
	}

	companyName: string;
	selectedCompany?: Company;

	allCompanies: Company[] = [];
	filteredCompanies: Company[] = [];

	protected async beforeActiveAsync() {
		await super.beforeActiveAsync();
		this.allCompanies = contacts
			.service!.getAllCompanies()
			.filter((c) => c.name)
			.sort((a, b) => (b > a ? 1 : -1));
		this.filteredCompanies = this.allCompanies;
	}

	onCloseModal() {
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
