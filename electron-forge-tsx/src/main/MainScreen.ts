import { PageViewActivity, app } from "@desk-framework/frame-core";
import page from "./page";

export class MainScreen extends PageViewActivity {
  static ViewBody = page;

  onHelloClick() {
    app.showAlertDialogAsync("Hello, world!");
  }

  onCloseWindow() {
    window.close();
  }
}
