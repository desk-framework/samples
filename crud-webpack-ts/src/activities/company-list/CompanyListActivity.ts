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
import { MainPageActivity } from "../main-page/MainPageActivity";
import { CompanyDetailActivity } from "../company-detail/CompanyDetailActivity";

export class CompanyListActivity extends Activity {
	constructor() {
		super();
		this.title = "Companies";
		this.autoAttach("detailActivity");
	}

	navigationPageId = "companies";

	icon = companyIcon;
	companies = new ManagedList<Company>();

	detailActivity?: CompanyDetailActivity;

	contactsServiceObserver = this.observeService<ContactsService>(
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
		MainPageActivity.setActivePage(this);
	}

	protected async navigateAsync(target: NavigationTarget) {
		let atRoot = !app.activities.navigationPath.detail;
		app.navigate(target, { replace: !atRoot });
	}

	async handleNavigationDetailAsync(detail: string) {
		let company = this.contactsServiceObserver.observed?.getCompanyById(detail);
		if (company) {
			this.detailActivity = new CompanyDetailActivity(company);
			await this.detailActivity.activateAsync();
		} else {
			this.detailActivity = undefined;
		}
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, CompanyListActivity);
}
