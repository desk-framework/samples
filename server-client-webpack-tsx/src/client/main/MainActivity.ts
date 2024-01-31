import { Activity, app } from "@desk-framework/frame-core";
import page from "./page.js";
import type { HelloAPI } from "../infra/HelloApi.js";
import type { Hello } from "../../shared/Hello.js";

export class MainActivity extends Activity {
	loading = true;
	error = false;
	hello?: Hello = undefined;
	queue = this.createActiveTaskQueue();
	helloApi = this.observeService<HelloAPI>("Infra.Hello");

	protected ready() {
		this.view = new page();
		app.showPage(this.view);
		this.queue.add(async () => {
			try {
				this.hello = await this.helloApi.observed?.fetchHello();
				this.loading = false;
			} catch (err) {
				app.log.error(err);
				this.loading = false;
				this.error = true;
			}
		});
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, MainActivity);
}
