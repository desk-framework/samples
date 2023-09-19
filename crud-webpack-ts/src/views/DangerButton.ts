import { UIButton, UIButtonStyle, UIColor } from "@desk-framework/frame-core";

class DangerousButtonStyle extends UIButtonStyle {
	override getStyles() {
		return super.getStyles().map((style, i) => ({
			...style,
			background: i ? UIColor["@red"] : UIColor["@clear"],
			textColor: i ? UIColor["@red"].text() : UIColor["@red"],
		}));
	}
}

export default UIButton.with({ buttonStyle: DangerousButtonStyle });
