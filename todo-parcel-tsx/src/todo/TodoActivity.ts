import {
	Activity,
	ManagedList,
	UIFormContext,
	UITextField,
	app,
} from "@desk-framework/frame-core";
import { TodoList } from "../model/TodoList.js";
import { TodoItem } from "../model/TodoItem.js";
import page from "./page.js";

export class TodoActivity extends Activity {
	/** Form context for new todo input text */
	formContext = new UIFormContext({ title: "" });

	/** Items to be displayed by the view */
	items = new ManagedList<TodoItem>();

	/** True if the list has any completed items */
	hasCompleted = false;

	/** Todo list model, with change handler */
	list = this.attach(new TodoList(), (list) => {
		if (!list) return;
		this.items.replace(list.items());
		this.hasCompleted = this.items.some((item) => item.completed);
	});

	/** Show the main page when ready */
	protected ready() {
		this.view = new page();
		app.showPage(this.view);
	}

	/** Event handler: Add item with current title */
	onAddItem() {
		let title = this.formContext.get("title");
		if (!title) return;
		this.list.addItem(title);

		// clear the form field and focus it again
		this.formContext.clear();
		this.findViewContent(UITextField)[0]?.requestFocus();
	}

	/** Event handler: Clear completed items */
	onClearCompleted() {
		this.list.clearCompleted();
	}
}

// Enable hot-reload for this activity and its view
typeof module !== "undefined" && app.hotReload(module, TodoActivity);
