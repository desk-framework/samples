import {
	TestCase,
	describe,
	expect,
	test,
	useTestContext,
} from "@desk-framework/frame-test";
import { TodoItem } from "~/model/TodoItem.js";
import { TodoActivity } from "./TodoActivity.js";

describe("TodoActivity", (ctx) => {
	let activity: TodoActivity;
	ctx.beforeEach((t) => {
		// Create a test app from scratch
		let app = useTestContext((options) => {
			options.renderFrequency = 5;
		});

		// Create an activity from scratch and activate it immediately
		activity = new TodoActivity();
		app.addActivity(activity, true);
	});

	// This is a trivial test and should always pass
	test("Activity is active", (t) => {
		expect(activity.isActive()).toBeTruthy();
	});

	// Add an item through the UI and confirm the activity model
	test("Add an item", async (t) => {
		let textFieldOut = await t.expectOutputAsync(20, { type: "textfield" });
		textFieldOut.getSingle().setValue("Test item");
		let buttonOut = await t.expectOutputAsync(20, { accessibleLabel: "Add" });
		buttonOut.getSingle().click();

		expect(activity.items.count).toBe(1);
		expect(activity.items.first()?.title).toBe("Test item");
	});

	// Add an item from the list model and check the UI
	test("New item shows in view", async (t) => {
		let item = new TodoItem();
		item.title = "Test item";
		activity.items.add(item);

		await t.expectOutputAsync(20, { text: "Test item" });
	});

	// A function that creates todo items and clears completed ones,
	// used for multiple tests below
	async function testCompletedItems(
		test: TestCase,
		nItems: number,
		itemsCompleted: number[],
	) {
		function makeTestItem(title: string, completed?: boolean) {
			let item = new TodoItem();
			item.title = title;
			if (completed) item.completed = true;
			return item;
		}
		for (let i = 0; i < nItems; i++) {
			activity.items.add(makeTestItem("Test " + i, itemsCompleted.includes(i)));
		}

		// Wait for items to be rendered
		await test.expectOutputAsync(20, { text: "Test " + (nItems - 1) });

		activity.onClearCompleted();
	}

	// Add multiple items and clear completed ones

	test("Complete one item, clear, list should be empty", async (t) => {
		await testCompletedItems(t, 1, [0]);
		let listOut = await t.expectOutputAsync(20, { accessibleRole: "list" });
		listOut.containing({}).toBeEmpty();
	});
	test("Complete two items, clear, list should be empty", async (t) => {
		await testCompletedItems(t, 2, [0, 1]);
		let listOut = await t.expectOutputAsync(20, { accessibleRole: "list" });
		listOut.containing({}).toBeEmpty();
	});
	test("Complete last item, clear, check list", async (t) => {
		await testCompletedItems(t, 3, [2]);
		let listOut = await t.expectOutputAsync(20, { accessibleRole: "list" });
		listOut.containing({ text: "Test 0" }).toBeRendered();
		listOut.containing({ text: "Test 1" }).toBeRendered();
		listOut.containing({ text: "Test 2" }).toBeEmpty();
	});
	test("Complete first item, clear, check list", async (t) => {
		await testCompletedItems(t, 3, [0]);
		let listOut = await t.expectOutputAsync(20, { accessibleRole: "list" });
		listOut.containing({ text: "Test 0" }).toBeEmpty();
		listOut.containing({ text: "Test 1" }).toBeRendered();
		listOut.containing({ text: "Test 2" }).toBeRendered();
	});
	test("Complete middle items, clear, check list", async (t) => {
		await testCompletedItems(t, 5, [1, 3]);
		let listOut = await t.expectOutputAsync(20, { accessibleRole: "list" });
		listOut.containing({ text: "Test 0" }).toBeRendered();
		listOut.containing({ text: "Test 1" }).toBeEmpty();
		listOut.containing({ text: "Test 2" }).toBeRendered();
		listOut.containing({ text: "Test 3" }).toBeEmpty();
		listOut.containing({ text: "Test 4" }).toBeRendered();
	});
});
