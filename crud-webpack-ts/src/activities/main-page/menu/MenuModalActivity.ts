import {
	NavigationTarget,
	UITheme,
	Activity,
	app,
} from "@desk-framework/frame-core";
import modal from "./modal";

export default class MenuModalActivity extends Activity {
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

	override async navigateAsync(target: NavigationTarget) {
		await super.navigateAsync(target);
		this.unlink();
	}
}
