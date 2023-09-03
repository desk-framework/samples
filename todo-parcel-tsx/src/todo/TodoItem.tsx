import {
  Binding,
  JSX,
  UIColor,
  UIComponentEvent,
  UIToggle,
  ViewComposite,
  bound,
} from "desk-frame";
import { TodoItem } from "../model/TodoItem.js";

/**
 * View composite for a todo list item
 * - Takes an `item` preset for a model object
 * - Includes a checkbox and label, toggles between normal and completed
 */
export default ViewComposite.define<{
  item?: TodoItem | Binding;
}>(
  <row height={48}>
    <style
      state={bound.boolean("item.completed")}
      textStyle={{ strikeThrough: true, color: UIColor.Text.alpha(0.5) }}
    >
      <toggle
        state={bound.boolean("item.completed")}
        decoration={{ padding: 4 }}
        textStyle={{ fontSize: 18 }}
        onChange="ToggleChange"
        label={bound.string("item.title")}
      />
    </style>
  </row>,
  class extends ViewComposite {
    item?: TodoItem;
    onToggleChange(e: UIComponentEvent<UIToggle>) {
      if (e.source instanceof UIToggle && this.item) {
        // check if completed state changed, update model
        let checked = !!e.source.state;
        if (this.item.completed !== checked) {
          this.item.completed = checked;
          this.item.emitChange();
        }
      }
    }
    onClick() {
      if (this.item) {
        // invert model state (will update checkbox binding)
        this.item.completed = !this.item.completed;
        this.item.emitChange();
      }
    }
  }
);
