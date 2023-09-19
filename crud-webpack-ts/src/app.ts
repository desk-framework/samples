import { Binding, app, strf, useWebContext } from "@desk-framework/frame-web";
import { MainPageActivity } from "./activities/main-page/MainPageActivity";
import { ContactsService } from "./services/ContactsService";

useWebContext((options) => {
	options.largeBreakpoint = 850;
	options.theme.rowSpacing = 16;
	options.theme.colors.set("background", "#111");
	options.theme.lightTextColor = "#eee";
});

if (process.env.NODE_ENV !== "production") {
	Binding.debugEmitter.listen((e) => {
		app.log.debug(
			strf("-- Binding %s: %s", e.data.binding.toString(), e.data.value),
		);
	});
}

app.addActivity(new MainPageActivity());
app.addService(new ContactsService());
