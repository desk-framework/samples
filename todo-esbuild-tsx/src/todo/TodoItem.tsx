import {
	Binding,
	JSX,
	UIToggle,
	ViewComposite,
	ViewEvent,
	bound,
} from "@desk-framework/frame-core";
import { TodoItem } from "../model/TodoItem.js";
import { ToggleLabel_Completed, ToggleLabel_Uncompleted } from "./styles";

/**
 * View composite for a todo list item
 * - Takes an `item` preset for a model object
 * - Includes a checkbox and label, toggles between normal and completed styles
 */
export default ViewComposite.define<{
	item?: TodoItem | Binding;
}>(
	<row height={48}>
		<toggle
			label={bound.string("item.title")}
			state={bound.boolean("item.completed")}
			labelStyle={bound
				.boolean("item.completed")
				.select(ToggleLabel_Completed, ToggleLabel_Uncompleted)}
			onChange="ToggleChange"
		/>
	</row>,
	class extends ViewComposite {
		item?: TodoItem;

		onToggleChange(e: ViewEvent<UIToggle>) {
			if (!this.item) return;
			this.item.completed = !!e.source.state;
			this.item.emitChange();
		}

		onClick(e: ViewEvent) {
			// invert model state (will update checkbox binding)
			if (!this.item || e.source instanceof UIToggle) return;
			this.item.completed = !this.item.completed;
			this.item.emitChange();
		}
	},
);
