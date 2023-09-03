import {
	app,
	ManagedList,
	PageViewActivity,
	UIFormContext,
	UITextField,
} from "desk-frame";
import { TodoItem } from "~/model/TodoItem.js";
import page from "./page.js";

export class TodoActivity extends PageViewActivity {
	static ViewBody = page;

	/** Form context for new todo input text */
	formContext = new UIFormContext({ title: "" });

	/** True if any items are in completed state, updated using list observer */
	hasCompleted = false;

	/** List of items (attached, with an observer to update completed state) */
	items = this.attach(new ManagedList().restrict(TodoItem), () => {
		this.hasCompleted = this.items?.some((it) => it.completed);
	});

	onAddItem() {
		let title = this.formContext.get("title");
		if (!title) return;
		this.formContext.clear();

		let item = new TodoItem();
		item.title = title;
		this.items.add(item);

		this.findViewContent(UITextField)[0]?.requestFocus();
	}

	onClearCompleted() {
		for (let item of this.items) {
			if (item.completed) this.items.remove(item);
		}
	}
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
	app.hotReload((import.meta as any).webpackHot, TodoActivity);
}
