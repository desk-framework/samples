import { JSX, bound } from "@desk-framework/frame-core";
import TodoItem from "./TodoItem.js";
import _header from "./_header.js";
import { TodoTextField } from "./styles.js";

export default (
	<scrollcontainer padding={{ y: 32, x: 8 }}>
		<cell
			cellStyle={{ width: "100%", maxWidth: 640, padding: 2 }}
			position={{ gravity: "center" }}
			layout={{ distribution: "start" }}
		>
			{/* Header row with app name and button */}
			{_header}

			{/* List of items using composite view */}
			<list items={bound.list("items")}>
				<TodoItem item={bound("item")} />
			</list>

			{/* Input field and button */}
			<row height={48}>
				<label icon="@chevronNext" iconSize={22} />
				<textfield
					formField="title"
					textFieldStyle={TodoTextField}
					onEnterKeyPress="AddItem"
					requestFocus
				>
					What do you want to do?
				</textfield>
				<iconbutton icon="@plus" onClick="AddItem" accessibleLabel="Add" />
			</row>
		</cell>
	</scrollcontainer>
);
