import {
	NavigationTarget,
	UITheme,
	ViewActivity,
} from "@desk-framework/frame-core";
import modal from "./modal";

export default class MenuModalActivity extends ViewActivity {
	static ViewBody = modal;

	constructor() {
		super();
		this.renderPlacement = {
			mode: "modal",
			shade: UITheme.getModalDialogShadeOpacity(),
			transform: {
				show: "@fade-in-right",
				hide: "@fade-out-left",
			},
		};
	}

	onCloseModal() {
		this.unlink();
	}

	override async handleNavigateAsync(target: NavigationTarget) {
		await super.handleNavigateAsync(target);
		this.unlink();
	}
}
