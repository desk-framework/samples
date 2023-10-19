import { ManagedList, ManagedObject } from "@desk-framework/frame-core";
import { TodoItem } from "./TodoItem";

export class TodoList extends ManagedObject {
	/** Returns an iterator for all list items */
	items() {
		return this._items.objects();
	}

	/** Add an item */
	addItem(title: string) {
		let item = TodoItem.create({ title });
		this._items.add(item);
		return item;
	}

	/** Remove all completed items */
	clearCompleted() {
		for (let item of this._items) {
			if (item.completed) this._items.remove(item);
		}
	}

	/** Keep track of all items in a private list, propagate change events */
	private _items = this.attach(new ManagedList().restrict(TodoItem), () => {
		this.emitChange();
	});
}
