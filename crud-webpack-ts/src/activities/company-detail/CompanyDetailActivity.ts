import { ActivationPath, UIFormContext, ViewActivity, app } from "desk-frame";
import { companyIcon } from "~/icons";
import { Company } from "~/models/Company";
import { Contact } from "~/models/Contact";
import type { ContactsService } from "~/services/ContactsService";
import body from "./body";

export class CompanyDetailActivity extends ViewActivity {
  static ViewBody = body;

  constructor() {
    super();
    this.path = "company/:id";
  }

  icon = companyIcon;

  contactsServiceObserver =
    app.services.observeService<ContactsService>("ContactsService");

  company?: Company = undefined;
  contacts?: Contact[] = undefined;

  mode: "view" | "edit" = "view";

  protected async handlePathMatchAsync(match?: ActivationPath.Match) {
    this.mode = "view";
    this.company = match?.id
      ? this.contactsServiceObserver.service!.getCompanyById(match.id)
      : undefined;
    this.title = this.company?.name;
    this.contacts = this.company?.id
      ? this.contactsServiceObserver.service!.getContactsByCompanyId(
          this.company.id
        )
      : undefined;
    await super.handlePathMatchAsync(match);
  }

  companyFormContext = new UIFormContext<{
    name: string;
    notes: string;
  }>().addRequired("name", "Please enter a name");

  initForm() {
    if (!this.company) return;
    this.companyFormContext.setAll(
      {
        name: this.company.name || "",
        notes: this.company.notes || "",
      },
      false
    );
  }

  updateCompany() {
    this.companyFormContext.validateAll();
    if (this.company && this.companyFormContext.valid) {
      let { name, notes } = this.companyFormContext.serialize();
      this.company.name = name?.trim() || "";
      this.company.notes = notes?.trim() || "";
      return true;
    }
  }

  onStartEdit() {
    this.initForm();
    this.mode = "edit";
  }

  onSaveCompany() {
    if (this.company && this.updateCompany()) {
      this.contactsServiceObserver.service!.saveCompany(this.company);
      this.mode = "view";
    }
  }

  onDeleteCompany() {
    if (this.company) {
      this.contactsServiceObserver.service!.deleteCompany(this.company);
      app.navigate(":back");
    }
  }
}

// Enable Webpack hot-reload for this activity and its view
if ((import.meta as any).webpackHot) {
  app.hotReload((import.meta as any).webpackHot, CompanyDetailActivity);
}
