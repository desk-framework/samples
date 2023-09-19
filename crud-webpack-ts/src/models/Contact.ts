import { ManagedRecord } from "@desk-framework/frame-core";
import { Company } from "./Company";

export class Contact extends ManagedRecord {
	id?: string;
	fullName?: string;
	email?: string;
	phone?: string;
	notes?: string;
	company?: Company;
}
