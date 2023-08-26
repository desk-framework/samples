import { ManagedRecord } from "desk-frame";

export class TodoItem extends ManagedRecord {
  title = "";
  completed = false;
}
