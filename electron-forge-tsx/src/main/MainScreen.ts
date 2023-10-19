import { Activity, app } from "@desk-framework/frame-core";
import page from "./page";

export class MainScreen extends Activity {
  protected ready() {
    this.view = new page();
    app.showPage(this.view);
  }

  onHelloClick() {
    app.showAlertDialogAsync("Hello, world!");
  }

  onCloseWindow() {
    window.close();
  }
}
