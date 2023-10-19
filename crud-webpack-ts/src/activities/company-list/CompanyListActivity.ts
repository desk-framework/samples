import {
	ManagedList,
	NavigationTarget,
	Activity,
	app,
} from "@desk-framework/frame-core";
import { companyIcon } from "~/icons";
import { Company } from "~/models/Company";
import type { ContactsService } from "~/services/ContactsService";
import body from "./body";

export class CompanyListActivity extends Activity {
	constructor() {
		super();
		this.title = "Companies";
	}

	icon = companyIcon;
	companies = new ManagedList<Company>();

	contactsServiceObserver = app.services.observeService<ContactsService>(
		"ContactsService",
		(contactsService) => {
			if (contactsService) {
				this.companies.replace(
					contactsService
						.getAllCompanies()
						.sort((a, b) => (a.name > b.name ? 1 : -1)),
				);
			}
		},
	);

	protected ready() {
		this.view = new body();
	}

	protected async handleNavigateAsync(target: NavigationTarget) {
		if (this.activationPath) {
			let atRoot = this.activationPath.match("companies");
			app.navigate(target, { replace: !atRoot });
		}
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, CompanyListActivity);
}
