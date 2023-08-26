import { ManagedList, NavigationTarget, ViewActivity, app } from "desk-frame";
import { contactIcon } from "~/icons";
import { Contact } from "~/models/Contact";
import { ContactsService } from "~/services/ContactsService";
import body from "./body";

export class ContactListActivity extends ViewActivity {
  static ViewBody = body;

  constructor() {
    super();
    this.title = "Contacts";
  }

  icon = contactIcon;
  contacts = new ManagedList<Contact>();

  contactsServiceObserver = app.services.observeService<ContactsService>(
    "ContactsService",
    (contactsService) => {
      if (contactsService) {
        this.contacts.replace(
          contactsService
            .getAllContacts()
            .sort((a, b) => (a.fullName > b.fullName ? 1 : -1))
        );
      }
    }
  );

  protected async handleNavigateAsync(target: NavigationTarget) {
    if (this.activationPath) {
      let atRoot = this.activationPath.match("");
      app.navigate(target, { replace: !atRoot });
    }
  }
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
  app.hotReload((import.meta as any).webpackHot, ContactListActivity);
}
