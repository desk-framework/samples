import { ManagedRecord } from "@desk-framework/frame-core";

export class TodoItem extends ManagedRecord {
	title = "";
	completed = false;
}
