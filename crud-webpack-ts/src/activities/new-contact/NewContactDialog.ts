import {
	DialogViewActivity,
	UIFormContext,
	UITheme,
	app,
} from "@desk-framework/frame-core";
import { Contact } from "~/models/Contact";
import { ContactsService } from "~/services/ContactsService";
import dialog from "./dialog";

let contacts = app.services.observeService<ContactsService>("ContactsService");

export class NewContactDialog extends DialogViewActivity {
	static ViewBody = dialog;

	constructor() {
		super();
		this.renderPlacement = {
			mode: "dialog",
			shade: UITheme.getModalDialogShadeOpacity(),
			transform: { show: "@fade-in-down", hide: "@fade-out-up" },
		};
	}

	formContext = new UIFormContext({
		fullName: "",
		email: "",
	}).addRequired("fullName", "Please enter a name");

	onClose() {
		this.unlink();
	}

	onEscapeKeyPress() {
		this.unlink();
	}

	onSave() {
		this.formContext.validateAll();
		if (this.formContext.errorCount) return;

		let contact = Contact.create(this.formContext.serialize());
		contacts.service?.saveContact(contact);
		this.unlink();
		app.navigate("/contact/" + contact.id);
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, NewContactDialog);
}
