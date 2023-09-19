import { ManagedRecord } from "@desk-framework/frame-core";

export class Company extends ManagedRecord {
	id?: string;
	name?: string;
	notes?: string;
}
