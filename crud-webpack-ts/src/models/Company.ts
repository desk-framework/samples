import { ManagedRecord } from "desk-frame";

export class Company extends ManagedRecord {
	id?: string;
	name?: string;
	notes?: string;
}
