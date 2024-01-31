import {
	describe,
	expect,
	test,
	useTestContext,
} from "@desk-framework/frame-test";
import { MainPageActivity } from "./activities/main-page/MainPageActivity";
import { ContactsService } from "./services/ContactsService";
import { app } from "@desk-framework/frame-core";
import { ContactListActivity } from "./activities/contact-list/ContactListActivity";
import { CompanyListActivity } from "./activities/company-list/CompanyListActivity";

describe("Integration", (scope) => {
	scope.beforeEach(() => {
		useTestContext((options) => {
			options.path = "/";
			options.renderFrequency = 5;
		})
			.addService(new ContactsService())
			.addActivity(new MainPageActivity(), true)
			.addActivity(new ContactListActivity())
			.addActivity(new CompanyListActivity());
	});

	test("Create contact, set company, delete contact and company", async (t) => {
		let svc = app.services.get("ContactsService") as ContactsService;

		// click New contact button
		let out = await t.expectOutputAsync(100, {
			type: "button",
			text: "New contact",
		});
		out.getSingle().click();

		// type name into name field and click Save
		out = await t.expectOutputAsync(100, { focused: true, type: "textfield" });
		out.getSingle().setValue("Foo Bar");
		out = await t.expectOutputAsync(100, { text: "Save" });
		out.getSingle().click();

		// look for name in detail page, then click edit
		out = await t.expectOutputAsync(100, { type: "label", text: "Foo Bar" });
		out = await t.expectOutputAsync(100, { type: "button", text: "Edit" });
		out.getSingle().click();

		// look for name text field and change the name
		out = await t.expectOutputAsync(100, { type: "textfield", focused: true });
		out.getSingle().setValue("Edited Foo Bar");

		// look for the company text field (with None) and click it
		out = await t.expectOutputAsync(100, {
			type: "textfield",
			value: "(None)",
		});
		out.getSingle().click();

		// look for company name text field and set name
		out = await t.expectOutputAsync(100, { type: "textfield", focused: true });
		out.getSingle().setValue("Foo Company");

		// press the Confirm button
		out = await t.expectOutputAsync(100, { type: "button", text: "Confirm" });
		out.getSingle().click();

		// press the Save button on the contact form
		out = await t.expectOutputAsync(100, { type: "button", text: "Save" });
		out.getSingle().click();

		// check if the contact and company exist
		t.log("Checking that contact exists");
		let contacts = svc
			.getAllContacts()
			.filter((c) => c.fullName === "Edited Foo Bar");
		expect(contacts).toBeArray(1);
		t.log("Checking that company exists");
		let companies = svc
			.getAllCompanies()
			.filter((c) => c.name === "Foo Company");
		expect(companies).toBeArray(1);

		// now, from the company page, find the contact
		app.navigate("/companies/" + companies[0]!.id);
		await t.expectPathAsync(100, "companies/" + companies[0]!.id);
		t.log("Navigated to company page", app.getPath());
		out = await t.expectOutputAsync(100, {
			type: "button",
			text: "Edited Foo Bar",
		});
		out.getSingle().click();
		await t.expectPathAsync(100, "contacts/" + contacts[0]!.id);
		t.log("Navigated to contact page", app.getPath());

		// delete the contact first
		out = await t.expectOutputAsync(100, { text: "Delete" });
		out.getSingle().click();
		await (
			await t.expectMessageDialogAsync(100, "Delete contact?")
		).confirmAsync();
		t.log("Deleted contact");

		// go back to the company using the menu
		out = await t.expectOutputAsync(100, { accessibleLabel: "Main menu" });
		out.getSingle().click();
		out = await t.expectOutputAsync(100, { type: "button", text: "Companies" });
		out.getSingle().click();

		// find the company in the list and select it
		out = await t.expectOutputAsync(100, {
			type: "button",
			text: "Foo Company",
		});
		out.getSingle().click();
		await t.expectPathAsync(100, "companies/" + companies[0]!.id);

		// now delete the company
		out = await t.expectOutputAsync(100, { text: "Delete" });
		out.getSingle().click();
		await (
			await t.expectMessageDialogAsync(100, "Delete company?")
		).confirmAsync();
		t.log("Deleted company");

		// check that the contact and company don't exist anymore
		t.log("Checking that contact doesn't exist anymore");
		contacts = svc
			.getAllContacts()
			.filter((c) => c.fullName === "Edited Foo Bar");
		expect(contacts).toBeArray(0);
		t.log("Checking that company doesn't exist anymore");
		companies = svc.getAllCompanies().filter((c) => c.name === "Foo Company");
		expect(companies).toBeArray(0);
	});
});
