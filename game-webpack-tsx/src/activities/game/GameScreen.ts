import {
	AsyncTaskQueue,
	DialogViewActivity,
	PageViewActivity,
	UIComponentEvent,
	UITextField,
	app,
} from "desk-frame";
import { GameState } from "~/models/GameState";
import { SettingsDialog } from "../settings/SettingsDialog";
import correction from "./correction";
import page from "./page";

export class GameScreen extends PageViewActivity {
	static override ViewBody = page;

	constructor() {
		super();
		this.queue = this.createActiveTaskQueue((options) => {
			options.throttleDelay = 100;
		});
		this.queue.add(() => this.tick());
	}

	game = new GameState();
	queue: AsyncTaskQueue;

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
		this.attach(dialog, (target) => {
			// resume game when dialog is closed
			if (!target) this.game.resume();
		});
		await dialog.activateAsync();
	}

	onAnswerInput(e: UIComponentEvent<UITextField>) {
		if (!e.source.value) return;
		let numbers = e.source.value.replace(/^0+|\D/g, "");
		e.source.value = numbers.slice(0, 3);
	}

	async onAnswerEntered(e: UIComponentEvent<UITextField>) {
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
		return new Promise<void>((resolve) => {
			class AnswerDialog extends DialogViewActivity {
				constructor() {
					super();
					this.activateAsync();
				}
				onContinue() {
					this.unlink();
					resolve();
				}
			}
			AnswerDialog.ViewBody = correction;
			this.attach(new AnswerDialog());
		});
	}
}

app.hotReload(module, GameScreen);
