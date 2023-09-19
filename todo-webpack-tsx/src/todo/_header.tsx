import { JSX, bound } from "@desk-framework/frame-core";

export default (
	<row height={80}>
		<h2>To do</h2>
		<spacer />
		<plainbutton
			icon="@close"
			hidden={bound.not("hasCompleted")}
			onClick="ClearCompleted"
		>
			Clear completed
		</plainbutton>
	</row>
);
