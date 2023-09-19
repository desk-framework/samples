import { useWebContext, app } from "@desk-framework/frame-web";
import { CountActivity } from "./counter/CountActivity.js";

useWebContext((options) => {
  // ...set options here
});
app.addActivity(new CountActivity(), true);
