import { app } from "@desk-framework/frame-core";
import { HelloAPI_Mock } from "../infra/HelloApi.mock.js";
import { MainActivity } from "./MainActivity.js";
import {
	describe,
	expect,
	test,
	useTestContext,
} from "@desk-framework/frame-test";

describe("MainActivity", (ctx) => {
	let activity: MainActivity;
	ctx.beforeEach((t) => {
		// Create a test app from scratch
		let app = useTestContext((options) => {
			options.renderFrequency = 5;
			options.captureLogs = true;
		});

		// Create the mock API and add it as a service
		app.addService(new HelloAPI_Mock());

		// Create an activity from scratch and activate it immediately
		activity = new MainActivity();
		app.addActivity(activity, true);
	});

	test("Loading state is true initially, then goes to false", async (t) => {
		expect(activity.loading).toBeTruthy();
		await t.pollAsync(() => !!activity.hello, 50, 1000);
		expect(activity.loading).toBeFalsy();
	});

	test("View shows API result", async (t) => {
		await t.expectOutputAsync(1000, { text: "Hello, test" });
	});

	test("View shows error if API fails", async (t) => {
		let mock = app.services.get("Infra.Hello") as HelloAPI_Mock;
		mock.mockFail = true;
		await t.expectOutputAsync(1000, { text: /error/i });
	});
});
