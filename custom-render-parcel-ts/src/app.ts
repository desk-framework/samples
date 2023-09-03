import {
	UICell,
	UIColor,
	UILabel,
	app,
	useWebContext,
} from "@desk-framework/webcontext";
import { ChartView, ChartData } from "./ChartView";

// NOTE: for simplicity, the ChartView is directly rendered
// by the app here. Instead, you could also use it within a view
// that's associated with an activity.

export function showChart(id: string, title: string, data: ChartData) {
	// create a preset view class with specified data
	let PresetChart = ChartView.with({ data, barColor: UIColor.Red });

	// create an render a cell containing the label and chart
	let view = new UICell();
	view.position = { gravity: "cover" };
	view.content.add(new UILabel(title), new PresetChart());
	app.render(view, { mode: "mount", mountId: id });
}

useWebContext((options) => {
	// Override control style to inherit the document's base style
	options.controlTextStyle = { fontFamily: "inherit", fontSize: "1em" };
});
