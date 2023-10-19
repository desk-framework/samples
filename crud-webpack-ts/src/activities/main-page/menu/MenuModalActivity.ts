import {
	NavigationTarget,
	UITheme,
	Activity,
	app,
} from "@desk-framework/frame-core";
import modal from "./modal";

export default class MenuModalActivity extends Activity {
	static ViewBody = modal;

	protected ready() {
		this.view = new modal();
		app.render(this.view, {
			mode: "modal",
			shade: UITheme.getModalDialogShadeOpacity(),
			transform: {
				show: "@fade-in-right",
				hide: "@fade-out-left",
			},
		});
	}

	onCloseModal() {
		this.unlink();
	}

	override async handleNavigateAsync(target: NavigationTarget) {
		await super.handleNavigateAsync(target);
		this.unlink();
	}
}
