import {
	UIPrimaryButton,
	app,
	useWebContext,
} from "./lib/desk-framework-web.es2020.esm.min.js";

// Note: this is a MINIMAL example, see other folders for full app architecture

// step 1: create a button object
let button = new UIPrimaryButton("Say hello");

// step 2: add an event listener
button.listen((e) => {
	if (e.name === "Click") {
		app.showAlertDialogAsync([
			"Hello, world!",
			"This app was made with the Desk framework.",
		]);
	}
});

// step 3: render the button
useWebContext().render(button, "app");
