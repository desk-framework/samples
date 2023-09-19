import { JSX, UIColor, bound } from "@desk-framework/frame-core";
import icons from "~/styles/icons";
import styles from "~/styles/styles";

export default (
	<cell
		padding={32}
		background={bound("game.paused").select(
			UIColor["@background"].brighten(-0.5),
		)}
	>
		<row spacing={16}>
			<label icon={icons.correct}>%[game.scoreCorrect]</label>
			<label icon={icons.incorrect}>%[game.scoreIncorrect]</label>
			<label>Score: %[game.score]</label>
			<spacer />
			<button
				icon={bound("game.paused").select(icons.resume, icons.pause)}
				buttonStyle={styles.GameIconButton}
				onClick="PauseToggle"
			/>
			<button
				icon={icons.settings}
				buttonStyle={styles.GameIconButton}
				onClick="ShowSettings"
			/>
		</row>
		<cell>
			<row align="center">
				<label labelStyle={styles.OperandText}>%[game.number1]</label>
				<label labelStyle={styles.SumText}>×</label>
				<label labelStyle={styles.OperandText}>%[game.number2]</label>
				<label labelStyle={styles.SumText}>=</label>
				<spacer width={32} />
				<textfield
					textFieldStyle={styles.AnswerField}
					disabled={bound("game.paused")}
					requestFocus
					onInput="AnswerInput"
					onEnterKeyPress="AnswerEntered"
					onSpacebarPress="AnswerEntered"
				/>
			</row>
		</cell>
		<row align="center" height={32}>
			<label hidden={bound.not("game.paused")} icon={icons.paused}>
				Game paused
			</label>
			<label labelStyle={styles.TimerLabel} hidden={bound("game.paused")}>
				%[game.minutesLeft] : %[game.secondsLeft:02n]
			</label>
			<label
				icon={icons.timeUp}
				hidden={bound.not("game.timeUp").or("game.paused")}
			/>
		</row>
	</cell>
);
