import { UIFormContext, Activity, app } from "@desk-framework/frame-core";
import { companyIcon } from "~/icons";
import { Company } from "~/models/Company";
import { Contact } from "~/models/Contact";
import type { ContactsService } from "~/services/ContactsService";
import body from "./body";

export class CompanyDetailActivity extends Activity {
	constructor(company: Company) {
		super();
		this.title = company.name;
		this.company = company;
	}

	icon = companyIcon;

	mode: "view" | "edit" = "view";
	company: Company;

	contactsServiceObserver =
		this.observeService<ContactsService>("ContactsService");
	contacts?: Contact[] = undefined;

	protected ready() {
		this.mode = "view";
		this.title = this.company?.name;
		this.contacts = this.company.id
			? this.contactsServiceObserver.observed!.getContactsByCompanyId(
					this.company.id,
			  )
			: undefined;

		this.view = new body();
	}

	companyFormContext = new UIFormContext<{
		name: string;
		notes: string;
	}>().addRequired("name", "Please enter a name");

	initForm() {
		if (!this.company) return;
		this.companyFormContext.setAll(
			{
				name: this.company.name || "",
				notes: this.company.notes || "",
			},
			false,
		);
	}

	updateCompany() {
		this.companyFormContext.validateAll();
		if (this.company && this.companyFormContext.valid) {
			let { name, notes } = this.companyFormContext.serialize();
			this.company.name = name?.trim() || "";
			this.company.notes = notes?.trim() || "";
			return true;
		}
	}

	onStartEdit() {
		this.initForm();
		this.mode = "edit";
	}

	onCancelEdit() {
		this.mode = "view";
	}

	onSaveCompany() {
		if (this.company && this.updateCompany()) {
			this.contactsServiceObserver.observed!.saveCompany(this.company);
			this.mode = "view";
		}
	}

	async onDeleteCompany() {
		if (this.company) {
			let confirm = await app.showConfirmDialogAsync([
				"Delete company?",
				"This action cannot be undone.",
			]);
			if (!confirm) return;
			this.contactsServiceObserver.observed!.deleteCompany(this.company);
			app.navigate(":back");
		}
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, CompanyDetailActivity);
}
