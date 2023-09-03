import { JSX, UIIcon, bound } from "desk-frame";

export default (
	<row>
		<h1 shrinkwrap={false}>To do</h1>
		<linkbutton
			position={{ gravity: "end" }}
			icon={UIIcon.Close}
			hidden={bound.not("hasCompleted")}
			onClick="ClearCompleted"
		>
			Clear completed
		</linkbutton>
	</row>
);
