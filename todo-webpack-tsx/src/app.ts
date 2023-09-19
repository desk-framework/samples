import { useWebContext } from "@desk-framework/frame-web";
import { TodoActivity } from "./todo/TodoActivity.js";

// Create the app and add a single activity
const app = useWebContext();
app.addActivity(new TodoActivity(), true);
