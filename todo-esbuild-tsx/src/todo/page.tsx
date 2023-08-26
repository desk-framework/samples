import { JSX, UIIcon, bound } from "desk-frame";
import TodoItemView from "./TodoItem.js";
import _header from "./_header.js";

export default (
  <scrollcontainer padding={{ y: 32, x: 8 }}>
    <cell
      dimensions={{ width: "100%", maxWidth: 640 }}
      position={{ gravity: "center" }}
      layout={{ distribution: "start" }}
    >
      {/* Header row with app name and button */}
      {_header}
      <separator margin={8} />

      {/* List of items using composite view */}
      <list items={bound.list("items")}>
        <TodoItemView item={bound("item")} />
      </list>

      {/* Input field and button */}
      <row height={48}>
        <label icon={UIIcon.ExpandRight} iconSize={22} />
        <borderlesstextfield
          formField="title"
          textStyle={{ fontSize: 18 }}
          requestFocus
          onEnterKeyPress="AddItem"
        >
          What do you want to do?
        </borderlesstextfield>
        <iconbutton
          icon={UIIcon.Plus}
          onClick="AddItem"
          accessibleLabel="Add"
        />
      </row>
    </cell>
  </scrollcontainer>
);
