import { JSX, UIColor, UIToggle, View, bound } from "desk-frame";
import { TodoItem } from "~/model/TodoItem.js";

/**
 * View composite for a todo list item
 * - Takes an `item` preset for a model object
 * - Includes a checkbox and label, toggles between normal and completed
 */
export default View.compose<{
  item: TodoItem;
}>(
  () => (
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
    </row>
  ),
  {
    onToggleChange(e) {
      if (e.source instanceof UIToggle) {
        // check if completed state changed, update model
        let checked = !!e.source.state;
        if (this.item.completed !== checked) {
          this.item.completed = checked;
          this.item.emitChange();
        }
      }
    },
    onClick() {
      // invert model state (will update checkbox binding)
      this.item.completed = !this.item.completed;
      this.item.emitChange();
    },
  }
);
