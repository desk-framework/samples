import { JSX, UIColor, UIIcon, bound } from "desk-frame";

export default (
	<cell>
		<conditional state={bound("loading")}>
			<label>Loading...</label>
		</conditional>
		<conditional state={bound("error")}>
			<label icon={UIIcon.Close} iconColor={UIColor.Red}>
				Oops, an error occurred!
			</label>
		</conditional>
		<conditional state={bound("hello")}>
			<label>Hello, %[hello.name]</label>
		</conditional>
	</cell>
);
