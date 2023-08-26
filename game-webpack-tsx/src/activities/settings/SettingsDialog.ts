import { DialogViewActivity, UIFormContext, app } from "desk-frame";
import dialog from "./dialog";
import { GameState } from "~/models/GameState";

export class SettingsDialog extends DialogViewActivity {
  static override ViewBody = dialog;

  constructor(public game: GameState) {
    super();
    this.formContext.set("maxNumber", game.multMax);
    this.formContext.set("seconds", game.countSeconds);
  }

  formContext = new UIFormContext({
    maxNumber: 1,
    seconds: 1,
  });

  onConfirm() {
    let values = this.formContext.serialize();
    let maxNumber = Math.min(30, Math.max(2, values.maxNumber || 0));
    let seconds = Math.min(120, Math.max(3, values.seconds || 0));
    this.game.multMax = maxNumber;
    this.game.countSeconds = seconds;
    this.unlink();
  }
}

app.hotReload(module, SettingsDialog);
