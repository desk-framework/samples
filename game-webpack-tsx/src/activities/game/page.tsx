import { JSX, UIColor, bound } from "desk-frame";
import icons from "~/styles/icons";
import styles from "~/styles/styles";

export default (
	<cell
		padding={32}
		background={bound("game.paused").select(UIColor.Background.brighten(-0.5))}
	>
		<row spacing={16}>
			<label icon={icons.correct}>%[game.scoreCorrect]</label>
			<label icon={icons.incorrect}>%[game.scoreIncorrect]</label>
			<label>Score: %[game.score]</label>
			<spacer />
			<button
				icon={bound("game.paused").select(icons.resume, icons.pause)}
				style={styles.gameIconButton}
				onClick="PauseToggle"
			/>
			<button
				icon={icons.settings}
				style={styles.gameIconButton}
				onClick="ShowSettings"
			/>
		</row>
		<cell>
			<centerrow>
				<label style={styles.operandText}>%[game.number1]</label>
				<label style={styles.sumText}>×</label>
				<label style={styles.operandText}>%[game.number2]</label>
				<label style={styles.sumText}>=</label>
				<spacer width={32} />
				<textfield
					style={styles.answerField}
					disabled={bound("game.paused")}
					requestFocus
					onInput="AnswerInput"
					onEnterKeyPress="AnswerEntered"
					onSpacebarPress="AnswerEntered"
				/>
			</centerrow>
		</cell>
		<centerrow height={32}>
			<label hidden={bound.not("game.paused")} icon={icons.paused}>
				Game paused
			</label>
			<label style={styles.timerLabel} hidden={bound("game.paused")}>
				%[game.minutesLeft] : %[game.secondsLeft,02n]
			</label>
			<label
				icon={icons.timeUp}
				hidden={bound.not("game.timeUp").or("game.paused")}
			/>
		</centerrow>
	</cell>
);
