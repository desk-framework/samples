import { AppException, ManagedObject, app } from "desk-frame";
import { isHello } from "../../shared/Hello.js";

export const HelloResponseError = AppException.type(
  "HELLO_RESPONSE",
  "Invalid API response"
);

export class HelloAPI extends ManagedObject {
  async fetchHello() {
    app.log.verbose("HelloAPI: Fetching /api/hello");
    let request = await fetch("/api/hello");
    let json: any = await request.json();
    if (isHello(json)) return json;
    throw new HelloResponseError();
  }
}
