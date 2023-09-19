import {
	Binding,
	RenderContext,
	UIColor,
	View,
} from "@desk-framework/frame-core";

/** Data to be displayed in a chart, each bar with its value and label */
export type ChartData = Array<{ label: string; value: number }>;

const BAR_WIDTH = 20;
const PADDING = 20;

/**
 * A view object with its own custom renderer that renders a chart to an HTML Canvas element
 */
export class ChartView extends View {
	/** Create a preset `ChartView` class with the specified properties */
	static with(preset: {
		data?: ChartData | Binding;
		width?: number;
		height?: number;
		barColor?: UIColor | string;
	}) {
		return class PresetChartView extends this {
			constructor() {
				super();
				this.applyViewPreset(preset);
			}
		};
	}

	/** The data to be displayed */
	data: ChartData = [];

	/** The width of the canvas element; defaults to 300 */
	width = 300;

	/** The height of the canvas element; defaults to 200 */
	height = 200;

	/** The color of all bars in the chart; defaults to `UIColor.Primary` */
	barColor = UIColor["@primary"];

	/** Renderer implementation */
	render(callback: RenderContext.RenderCallback) {
		if (!this._canvas) this._createCanvas();
		let out = new RenderContext.Output(this, this._canvas);
		callback(out, () => this._draw());
	}

	// The following methods must exist on View but do nothing here:
	requestFocus() {}
	findViewContent() {
		return [];
	}

	/** Create the HTML canvas element (once) */
	private _createCanvas() {
		let canvas = (this._canvas = document.createElement("canvas"));
		canvas.height = this.height;
		canvas.width = this.width;
	}

	private _canvas?: HTMLCanvasElement;

	/** Draw the chart on the existing canvas */
	private _draw() {
		let ctx = this._canvas?.getContext("2d");
		if (!ctx) return;
		let space =
			(this.width - PADDING * 2 - this.data.length * BAR_WIDTH) /
			(this.data.length - 1);
		let maxValue = Math.max(...this.data.map((bar) => bar.value));
		let vf = (this.height - PADDING * 2) / maxValue;
		let x = PADDING;

		ctx.clearRect(0, 0, this.width, this.height);
		for (let bar of this.data) {
			ctx.fillStyle = String(this.barColor);
			ctx.fillRect(x, this.height - PADDING, BAR_WIDTH, -bar.value * vf);
			ctx.fillStyle = String(UIColor["@text"]);
			ctx.textAlign = "center";
			ctx.fillText(bar.label, x + BAR_WIDTH / 2, this.height - 5);
			x += space + BAR_WIDTH;
		}
	}
}
