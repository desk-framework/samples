import { useWebContext } from "@desk-framework/webcontext";
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
  options.theme.colors = {
    ...options.theme.colors,
    ...colors,
  };
});
app.addActivity(new GameScreen(), true);
