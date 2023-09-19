import { ManagedObject, ViewActivity } from "@desk-framework/frame-core";

export class MasterDetailViewState extends ManagedObject {
	masterActivity?: ViewActivity = undefined;
	detailActivity?: ViewActivity = undefined;

	update(masterActivity: ViewActivity, detailActivity?: ViewActivity) {
		this.masterActivity = masterActivity;
		this.detailActivity = detailActivity;
	}
}
