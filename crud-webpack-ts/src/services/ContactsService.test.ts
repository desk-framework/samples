import { describe, test, expect, useTestContext } from "@desk-framework/test";
import { app } from "desk-frame";
import { ContactsService } from "./ContactsService";
import { Contact } from "~/models/Contact";
import { Company } from "~/models/Company";

describe("Contacts service", (scope) => {
  scope.beforeEach(() => {
    useTestContext().addService("ContactsService", new ContactsService());
  });

  test("Can create and delete contacts", (t) => {
    let svc = app.services.get("ContactsService") as ContactsService;
    let contact = Contact.create({ fullName: "Foo Bar" });
    svc.saveContact(contact);
    let id = contact.id!;
    expect(id).toBeDefined();
    t.log("Saved contact");
    expect(svc.getContactById(id)).toHaveProperty("fullName").toBe("Foo Bar");
    t.log("Retrieved contact");
    svc.deleteContact(contact);
    t.log("Deleted contact");
    expect(svc.getContactById(id)).toBeUndefined();
  });

  test("Can create and delete companies", (t) => {
    let svc = app.services.get("ContactsService") as ContactsService;
    let company = Company.create({ name: "Foo" });
    svc.saveCompany(company);
    let id = company.id!;
    expect(id).toBeDefined();
    t.log("Saved company");
    expect(svc.getCompanyById(id)).toHaveProperty("name").toBe("Foo");
    t.log("Retrieved company");
    svc.deleteCompany(company);
    t.log("Deleted company");
    expect(svc.getCompanyById(id)).toBeUndefined();
  });

  // TODO: more tests...
});
