import {
	ActivationPath,
	UIFormContext,
	ViewActivity,
	app,
} from "@desk-framework/frame-core";
import { contactIcon } from "~/icons";
import { Contact } from "~/models/Contact";
import { ContactsService } from "~/services/ContactsService";
import body from "./body";
import CompanySelectorDialog from "./company-selector/CompanySelectorDialog";

export class ContactDetailActivity extends ViewActivity {
	static ViewBody = body;

	path = "contact/:id";

	icon = contactIcon;

	contactsServiceObserver =
		app.services.observeService<ContactsService>("ContactsService");

	contact?: Contact = undefined;

	mode: "view" | "edit" = "view";

	protected async handlePathMatchAsync(match?: ActivationPath.Match) {
		this.mode = "view";
		this.contact = match?.id
			? this.contactsServiceObserver.service!.getContactById(match.id)
			: undefined;
		this.title = this.contact?.fullName;
		await super.handlePathMatchAsync(match);
	}

	contactFormContext = new UIFormContext<{
		fullName: string;
		email: string;
		phone: string;
		notes: string;
	}>().addRequired("fullName", "Please enter a name");

	initForm() {
		if (!this.contact) return;
		this.contactFormContext.setAll(
			{
				fullName: this.contact.fullName || "",
				email: this.contact.email || "",
				phone: this.contact.phone || "",
				notes: this.contact.notes || "",
			},
			false,
		);
	}

	updateContact() {
		this.contactFormContext.validateAll();
		if (this.contact && this.contactFormContext.valid) {
			let { fullName, email, phone, notes } =
				this.contactFormContext.serialize();
			this.contact.fullName = fullName?.trim() || "";
			this.contact.email = email?.trim() || "";
			this.contact.phone = phone?.trim() || "";
			this.contact.notes = notes?.trim() || "";
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

	onClearCompany() {
		this.contact!.company = undefined;
	}

	async onShowCompanySelector() {
		if (!this.contact) return;
		let dialog = new CompanySelectorDialog(this.contact.company);
		this.attach(dialog);
		await dialog.activateAsync();
		dialog.listen((e) => {
			if (e.name === "Confirm") {
				this.contact!.company = dialog.selectedCompany;
			}
		});
	}

	onSaveContact() {
		if (this.contact && this.updateContact()) {
			let company = this.contact.company;
			if (company && !company.id) {
				this.contactsServiceObserver.service!.saveCompany(company);
			}
			this.contactsServiceObserver.service!.saveContact(this.contact);
			this.mode = "view";
		}
	}

	async onDeleteContact() {
		if (this.contact) {
			let confirm = await app.showConfirmDialogAsync([
				"Delete contact?",
				"This action cannot be undone.",
			]);
			if (!confirm) return;
			this.contactsServiceObserver.service!.deleteContact(this.contact);
			app.navigate(":back");
		}
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, ContactDetailActivity);
}
