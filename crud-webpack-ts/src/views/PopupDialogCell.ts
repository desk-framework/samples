import { UICell, UIColor } from "@desk-framework/frame-core";

export default UICell.with({
	cellStyle: {
		background: UIColor["@background"],
		grow: 0,
		width: "100%",
		maxWidth: 540,
		padding: { y: 24, x: 20 },
		borderRadius: 8,
		dropShadow: 0.8,
	},
	onEscapeKeyPress: "CloseModal",
	position: { gravity: "center" },
});
