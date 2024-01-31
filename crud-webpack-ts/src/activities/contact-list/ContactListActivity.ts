import {
	Activity,
	ManagedList,
	NavigationTarget,
	app,
} from "@desk-framework/frame-core";
import { contactIcon } from "~/icons";
import { Contact } from "~/models/Contact";
import { ContactsService } from "~/services/ContactsService";
import { ContactDetailActivity } from "../contact-detail/ContactDetailActivity";
import { MainPageActivity } from "../main-page/MainPageActivity";
import body from "./body";

export class ContactListActivity extends Activity {
	constructor() {
		super();
		this.title = "Contacts";
		this.autoAttach("detailActivity");
	}

	navigationPageId = "contacts";

	icon = contactIcon;
	contacts = new ManagedList<Contact>();

	detailActivity?: ContactDetailActivity;

	contactsServiceObserver = this.observeService<ContactsService>(
		"ContactsService",
		(contactsService) => {
			if (contactsService) {
				this.contacts.replace(
					contactsService
						.getAllContacts()
						.sort((a, b) => (a.fullName > b.fullName ? 1 : -1)),
				);
			}
		},
	);

	protected ready() {
		this.view = new body();
		MainPageActivity.setActivePage(this);
	}

	protected async navigateAsync(target: NavigationTarget) {
		let atRoot = !app.activities.navigationPath.detail;
		app.navigate(target, { replace: !atRoot });
	}

	async handleNavigationDetailAsync(detail: string) {
		let contact = this.contactsServiceObserver.observed?.getContactById(detail);
		if (contact) {
			this.detailActivity = new ContactDetailActivity(contact);
			await this.detailActivity.activateAsync();
		} else {
			this.detailActivity = undefined;
		}
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, ContactListActivity);
}
