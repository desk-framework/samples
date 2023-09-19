import { JSX, UIColor } from "@desk-framework/frame-core";
import icons from "~/styles/icons";
import styles from "~/styles/styles";

export default (
	<cell
		position={{ gravity: "cover" }}
		background={UIColor["@black"]}
		textColor={UIColor["@red"]}
		onKeyPress="Continue"
		onClick="Continue"
	>
		<label icon={icons.incorrect} iconSize={64} />
		<spacer width={8} />
		<row align="center">
			<label labelStyle={styles.OperandText}>%[game.number1]</label>
			<label labelStyle={styles.SumText}>×</label>
			<label labelStyle={styles.OperandText}>%[game.number2]</label>
			<label labelStyle={styles.SumText}>=</label>
			<spacer width={32} />
			<label labelStyle={styles.AnswerText}>%[game.answer]</label>
		</row>
		<spacer width={16} />
		<button
			buttonStyle={styles.GameIconButton}
			icon={icons.continue}
			iconSize={32}
		>
			Continue
		</button>
	</cell>
);
