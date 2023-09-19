import { ManagedObject } from "@desk-framework/frame-core";
import { NumberBuffer } from "./NumberBuffer";

const DEFAULT_TIME_SEC = 60;
const DEFAULT_MULT_MAX = 10;

export class GameState extends ManagedObject {
	constructor() {
		super();
		this.resume();
	}

	paused = false;
	showCorrection = false;
	lastTime = Date.now();
	countSeconds = DEFAULT_TIME_SEC;
	multMax = DEFAULT_MULT_MAX;

	number1 = 1;
	number2 = 1;
	answer = 1;

	minutesLeft = 0;
	secondsLeft = 0;
	timeUp = false;

	score = 0;
	scoreCorrect = 0;
	scoreIncorrect = 0;

	pause() {
		this.paused = true;
	}

	resume() {
		this.paused = false;
		this.showCorrection = false;
		this.lastTime = Date.now();
		let [old1, old2] = [this.number1, this.number2];
		while (this.number1 === old1 && this.number2 === old2) {
			this.number1 = this._buffer1.next(this.multMax > 5 ? 2 : 1, this.multMax);
			this.number2 = this._buffer2.next(this.multMax > 5 ? 2 : 1, this.multMax);
			this.answer = this.number1 * this.number2;
		}
		this.tick();
	}

	tick() {
		if (this.paused || this.showCorrection) return;
		let secElapsed = Math.floor((Date.now() - this.lastTime) / 1000);
		let secLeft = Math.max(0, this.countSeconds - secElapsed);
		this.minutesLeft = Math.floor(secLeft / 60);
		this.secondsLeft = secLeft % 60;
		this.timeUp = !secLeft;
	}

	next(answer: number) {
		if (this.paused) return;
		if (this.number1 * this.number2 === answer) {
			this.scoreCorrect++;
			this.score += Math.floor(
				((this.minutesLeft * 60 + this.secondsLeft) / this.countSeconds) * 10,
			);
			this.resume();
		} else {
			this.scoreIncorrect++;
			this.score = Math.max(0, this.score - this.countSeconds);
			this.showCorrection = true;
		}
	}

	private _buffer1 = new NumberBuffer();
	private _buffer2 = new NumberBuffer();
}
