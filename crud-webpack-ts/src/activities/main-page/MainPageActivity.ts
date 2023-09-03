import { ActivationPath, PageViewActivity, app } from "desk-frame";
import { CompanyDetailActivity } from "~/activities/company-detail/CompanyDetailActivity";
import { CompanyListActivity } from "~/activities/company-list/CompanyListActivity";
import { ContactDetailActivity } from "~/activities/contact-detail/ContactDetailActivity";
import { ContactListActivity } from "~/activities/contact-list/ContactListActivity";
import { NewContactDialog } from "~/activities/new-contact/NewContactDialog";
import { MasterDetailViewState } from "~/models/MasterDetailViewState";
import MenuModalActivity from "./menu/MenuModalActivity";
import page from "./page";

export class MainPageActivity extends PageViewActivity {
	static ViewBody = page;

	path = "/";

	masterDetailState = new MasterDetailViewState();

	contactList = this.attach(new ContactListActivity());
	companyList = this.attach(new CompanyListActivity());
	contactDetail?: ContactDetailActivity;
	companyDetail?: CompanyDetailActivity;

	protected async afterActiveAsync() {
		await super.afterActiveAsync();

		// create master activities and activate (forever)
		await this.contactList.activateAsync();
		await this.companyList.activateAsync();

		// create contact detail view, update master when active
		this.contactDetail = this.attach(new ContactDetailActivity(), () => {
			if (this.contactDetail?.isActive()) {
				this.masterDetailState.update(this.contactList, this.contactDetail);
			}
		});

		// create company detail view, update master when active
		this.companyDetail = this.attach(new CompanyDetailActivity(), () => {
			if (this.companyDetail?.isActive()) {
				this.masterDetailState.update(this.companyList, this.companyDetail);
			}
		});
	}

	protected async handlePathMatchAsync(match?: ActivationPath.Match) {
		super.handlePathMatchAsync(match);

		// update to master-only state if path matches exactly
		if (match?.path === "") {
			this.masterDetailState.update(this.contactList);
		}
		if (match?.path === "companies") {
			this.masterDetailState.update(this.companyList);
		}
	}

	async onShowNewContact() {
		let dialog = this.attach(new NewContactDialog());
		await dialog.activateAsync();
	}

	onGoBack() {
		app.goBack();
	}

	async onShowMenu() {
		let activity = this.attach(new MenuModalActivity());
		await activity.activateAsync();
	}
}
