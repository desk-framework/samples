import { Binding, app, strf, useWebContext } from "@desk-framework/webcontext";
import { MainPageActivity } from "./activities/main-page/MainPageActivity";
import { ContactsService } from "./services/ContactsService";

useWebContext((options) => {
  options.largeBreakpoint = 850;
});

if (process.env.NODE_ENV !== "production") {
  Binding.debugEmitter.listen((e) => {
    app.log.debug(
      strf("-- Binding %s: %s", e.data.binding.toString(), e.data.value)
    );
  });
}

app.addActivity(new MainPageActivity());
app.addService("ContactsService", new ContactsService());
