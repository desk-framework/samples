import { JSX, bound } from "@desk-framework/frame-core";

export default (
	<cell>
		<conditional state={bound("loading")}>
			<label bold>Loading...</label>
		</conditional>
		<conditional state={bound("error")}>
			<label icon="@close" iconColor="@red">
				Oops, an error occurred!
			</label>
		</conditional>
		<conditional state={bound("hello")}>
			<label icon="@check" iconColor="@green">
				Hello, %[hello.name]
			</label>
		</conditional>
	</cell>
);
