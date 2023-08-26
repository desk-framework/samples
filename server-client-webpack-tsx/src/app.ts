import { useWebContext } from "@desk-framework/webcontext";
import { MainActivity } from "./client/main/MainActivity.js";
import { HelloAPI } from "./client/infra/HelloApi.js";

// Create the app with service and activity
const app = useWebContext();
app.addService("Infra.Hello", new HelloAPI());
app.addActivity(new MainActivity(), true);
