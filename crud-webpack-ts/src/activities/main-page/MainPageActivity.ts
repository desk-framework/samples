import { Activity, app } from "@desk-framework/frame-core";
import { NewContactDialog } from "~/activities/new-contact/NewContactDialog";
import MenuModalActivity from "./menu/MenuModalActivity";
import page from "./page";

export class MainPageActivity extends Activity {
	static setActivePage(activity: Activity & { detailActivity?: Activity }) {
		this.instance!.activePage = activity;
	}
	static instance?: MainPageActivity;

	constructor() {
		super();
		MainPageActivity.instance = this;
	}

	activePage?: Activity = undefined;
	icon = "";

	protected ready() {
		this.view = new page();
		app.showPage(this.view);
	}

	protected async afterActiveAsync() {
		if (!app.getPath()) {
			app.navigate("contacts");
		}
		return super.afterActiveAsync();
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
