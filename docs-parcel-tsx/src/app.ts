import { useWebContext, app } from "@desk-framework/webcontext";
import { CountActivity } from "./counter/CountActivity.js";

useWebContext((options) => {
  // ...set options here
});
app.addActivity(new CountActivity(), true);
