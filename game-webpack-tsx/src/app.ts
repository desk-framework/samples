import { useWebContext } from "@desk-framework/frame-web";
import { GameScreen } from "./activities/game/GameScreen";
import colors from "./styles/colors";

const app = useWebContext((options) => {
	options.logicalPxScale = 1.75;
	options.importCSS = [
		"https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap",
	];
	options.controlTextStyle = {
		fontFamily: '"Patrick Hand", cursive',
	};
	for (const [name, color] of colors) {
		options.theme.colors.set(name, color);
	}
});
app.addActivity(new GameScreen(), true);
