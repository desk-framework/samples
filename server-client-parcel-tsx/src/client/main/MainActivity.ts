import { Activity, app } from "@desk-framework/frame-core";
import page from "./page.js";
import type { HelloAPI } from "../infra/HelloApi.js";
import type { Hello } from "../../shared/Hello.js";

const helloApi = app.services.observeService<HelloAPI>("Infra.Hello");

export class MainActivity extends Activity {
	loading = true;
	error = false;
	hello?: Hello = undefined;
	queue = this.createActiveTaskQueue();

	protected ready() {
		this.view = new page();
		app.showPage(this.view);
		this.queue.add(async () => {
			try {
				this.hello = await helloApi.service?.fetchHello();
				this.loading = false;
			} catch (err) {
				app.log.error(err);
				this.loading = false;
				this.error = true;
			}
		});
	}
}

typeof module !== "undefined" && app.hotReload(module, MainActivity);
