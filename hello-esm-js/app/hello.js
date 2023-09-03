import {
	useWebContext,
	UIPrimaryButton,
	app,
} from "./lib/desk-framework-web.es2020.esm.min.js";

// Note: this is a MINIMAL example, check other folders for full app architecture

// step 1: create a button object
let button = new UIPrimaryButton("Say hello");

// step 2: add an event listener
button.listen((e) => {
	if (e.name === "Click")
		app.showAlertDialogAsync("Hello, world!", "You clicked?");
});

// step 3: render the button
useWebContext().render(button);
