import {
	useWebContext,
	app,
	UIPrimaryButton,
} from "@desk-framework/webcontext";

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
