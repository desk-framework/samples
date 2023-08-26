import { JSX, UIColor } from "desk-frame";
import icons from "~/styles/icons";
import styles from "~/styles/styles";

export default (
  <cell
    position={{ gravity: "cover" }}
    background={UIColor.Black}
    textColor={UIColor.Red}
    onKeyPress="Continue"
    onClick="Continue"
  >
    <label icon={icons.incorrect} iconSize={64} />
    <spacer width={8} />
    <centerrow>
      <label style={styles.operandText}>%[game.number1]</label>
      <label style={styles.sumText}>×</label>
      <label style={styles.operandText}>%[game.number2]</label>
      <label style={styles.sumText}>=</label>
      <spacer width={32} />
      <label style={styles.answerText}>%[game.answer]</label>
    </centerrow>
    <spacer width={16} />
    <button
      style={styles.gameIconButton}
      icon={icons.continue}
      iconAfter
      iconSize={32}
    >
      Continue
    </button>
  </cell>
);
