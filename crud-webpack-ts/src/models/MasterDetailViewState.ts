import { ManagedObject, Activity } from "@desk-framework/frame-core";

export class MasterDetailViewState extends ManagedObject {
	masterActivity?: Activity = undefined;
	detailActivity?: Activity = undefined;

	update(masterActivity: Activity, detailActivity?: Activity) {
		this.masterActivity = masterActivity;
		this.detailActivity = detailActivity;
	}
}
