// Note: this is a MINIMAL example, see other folders for full app architecture

// step 1: create a button object
let button = new desk.UIPrimaryButton("Say hello");

// step 2: add an event listener
button.listen((e) => {
	if (e.name === "Click") {
		desk.app.showAlertDialogAsync([
			"Hello, world!",
			"This app was made with the Desk framework.",
		]);
	}
});

// step 3: render the button
desk.useWebContext().render(button, "app");
