import { Activity, UIFormContext, app } from "@desk-framework/frame-core";
import { Contact } from "~/models/Contact";
import { ContactsService } from "~/services/ContactsService";
import dialog from "./dialog";

export class NewContactDialog extends Activity {
	formContext = new UIFormContext({
		fullName: "",
		email: "",
	}).addRequired("fullName", "Please enter a name");

	protected ready() {
		this.view = new dialog();
		app.showDialog(this.view);
	}

	onClose() {
		this.unlink();
	}

	onEscapeKeyPress() {
		this.unlink();
	}

	onSave() {
		this.formContext.validateAll();
		if (this.formContext.errorCount) return;
		let contacts = app.services.get("ContactsService") as ContactsService;

		let contact = Contact.create(this.formContext.serialize());
		contacts.saveContact(contact);
		this.unlink();
		app.navigate("/contacts/" + contact.id);
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, NewContactDialog);
}
