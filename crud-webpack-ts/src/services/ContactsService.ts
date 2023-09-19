import { Service } from "@desk-framework/frame-core";
import { Company } from "~/models/Company";
import { Contact } from "~/models/Contact";

// TODO: change this to something more appropriate, e.g. PouchDB

const LOCAL_STORAGE_KEY = "desk-samples-crud-routing-data";

let _nextId = 1;
let _companyData: any[] = [];
let _contactData: any[] = [];
let storage =
	(typeof localStorage !== "undefined" &&
		localStorage.getItem(LOCAL_STORAGE_KEY)) ||
	"";
if (storage) {
	try {
		let raw = JSON.parse(storage);
		if (raw.id) _nextId = raw.id;
		if (raw.companies) _companyData.push(...raw.companies);
		if (raw.contacts) _contactData.push(...raw.contacts);
	} catch {}
}
function _persist() {
	if (typeof localStorage === "undefined") return;
	localStorage.setItem(
		LOCAL_STORAGE_KEY,
		JSON.stringify({
			id: _nextId,
			contacts: _contactData,
			companies: _companyData,
		}),
	);
}

export class ContactsService extends Service {
	readonly id = "ContactsService";

	getAllContacts() {
		return _contactData.map((data) => this._createContact(data));
	}

	getContactById(id: string) {
		let data = _contactData.find((c) => c.id === id);
		if (data) return this._createContact(data);
	}

	saveContact(contact: Contact) {
		let { id, fullName, phone, email, notes, company } = contact;
		let data = id && _contactData.find((c) => c.id === id);
		id ||= String(_nextId++);
		if (!data) _contactData.push((data = { id }));
		data.fullName = fullName;
		data.phone = phone;
		data.email = email;
		data.notes = notes;
		data.companyId = company?.id;
		contact.id = id;
		_persist();
		this.emitChange();
	}

	deleteContact(contact: Contact) {
		let idx = _contactData.findIndex((c) => c.id === contact.id);
		if (idx >= 0) _contactData.splice(idx, 1);
		_persist();
		this.emitChange();
	}

	getAllCompanies() {
		return _companyData.map((data) => this._createCompany(data));
	}

	getCompanyById(id: string) {
		let data = _companyData.find((c) => c.id === id);
		if (data) return this._createCompany(data);
	}

	saveCompany(company: Company) {
		let { id, name, notes } = company;
		let data = id && _companyData.find((c) => c.id === id);
		id ||= String(_nextId++);
		if (!data) _companyData.push((data = { id }));
		data.name = name;
		data.notes = notes;
		company.id = id;
		_persist();
		this.emitChange();
	}

	deleteCompany(company: Company) {
		let idx = _companyData.findIndex((c) => c.id === company.id);
		if (idx >= 0) _companyData.splice(idx, 1);
		_persist();
		this.emitChange();
	}

	getContactsByCompanyId(id: string) {
		let listData = _contactData.filter((c) => c.companyId === id);
		return listData.map((data) => this._createContact(data));
	}

	private _createCompany(data: any) {
		return Company.create({
			id: data.id,
			name: data.name,
			notes: data.notes,
		});
	}

	private _createContact(data: any) {
		return Contact.create({
			id: data.id,
			fullName: data.fullName,
			email: data.email,
			phone: data.phone,
			notes: data.notes,
			company: data.id && this.getCompanyById(data.companyId),
		});
	}
}
