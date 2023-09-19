import { PageViewActivity, app } from "@desk-framework/frame-core";
import page from "./page.js";
import type { HelloAPI } from "../infra/HelloApi.js";
import type { Hello } from "../../shared/Hello.js";

export class MainActivity extends PageViewActivity {
	static ViewBody = page;

	loading = true;
	error = false;
	hello?: Hello = undefined;

	helloApi = app.services.observeService<HelloAPI>("Infra.Hello");

	protected async afterActiveAsync() {
		await super.afterActiveAsync();
		try {
			this.hello = await this.helloApi.service?.fetchHello();
			this.loading = false;
		} catch (err) {
			app.log.error(err);
			this.loading = false;
			this.error = true;
		}
	}
}

typeof module !== "undefined" && app.hotReload(module, MainActivity);
