import { useWebContext } from "@desk-framework/webcontext";
import { TodoActivity } from "./todo/TodoActivity";

// Create the app and add a single activity
const app = useWebContext();
app.addActivity(new TodoActivity(), true);
