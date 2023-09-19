import { Service } from "@desk-framework/frame-core";
import { Hello } from "../../shared/Hello.js";
import { HelloAPI, HelloResponseError } from "./HelloApi.js";

export class HelloAPI_Mock extends Service implements HelloAPI {
	readonly id = "Infra.Hello";

	mockFail?: boolean;

	async fetchHello(): Promise<Hello> {
		await new Promise((r) => setTimeout(r, 500));
		if (this.mockFail) throw new HelloResponseError();
		return { name: "test" };
	}
}
