import {
	AsyncTaskQueue,
	Activity,
	UITextField,
	ViewEvent,
	app,
} from "@desk-framework/frame-core";
import { GameState } from "~/models/GameState";
import { SettingsDialog } from "../settings/SettingsDialog";
import correction from "./correction";
import page from "./page";

export class GameScreen extends Activity {
	constructor() {
		super();
		this.queue = this.createActiveTaskQueue((options) => {
			options.throttleDelay = 100;
		});
		this.queue.add(() => this.tick());
	}

	game = new GameState();
	queue: AsyncTaskQueue;

	protected ready() {
		this.view = new page();
		app.showPage(this.view);
	}

	async tick() {
		this.game.tick();
		this.queue.add(() => this.tick());
	}

	onPauseToggle() {
		if (this.game.paused) {
			this.game.resume();
			this.findViewContent(UITextField)[0]?.requestFocus();
		} else {
			this.game.pause();
		}
	}

	async onShowSettings() {
		let dialog = new SettingsDialog(this.game);
		await this.attach(dialog).activateAsync();

		// wait for dialog to close, then resume game
		for await (let _ of dialog.listen());
		this.game.resume();
	}

	onAnswerInput(e: ViewEvent<UITextField>) {
		if (!e.source.value) return;
		let numbers = e.source.value.replace(/^0+|\D/g, "");
		e.source.value = numbers.slice(0, 3);
	}

	async onAnswerEntered(e: ViewEvent<UITextField>) {
		let answer = +e.source.value!;
		if (!answer) return;
		this.game.next(answer);
		if (this.game.showCorrection) {
			await this.showAnswer();
			this.game.resume();
		}
		e.source.value = "";
		e.source.requestFocus();
	}

	async showAnswer() {
		class AnswerDialog extends Activity {
			protected ready() {
				this.view = new correction();
				app.render(this.view, { mode: "dialog" });
			}
			onContinue() {
				this.unlink();
			}
		}
		let answerDialog = this.attach(new AnswerDialog());
		await answerDialog.activateAsync();
		for await (let _ of answerDialog.listen());
	}
}

app.hotReload(module, GameScreen);
