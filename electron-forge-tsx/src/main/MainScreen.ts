import { PageViewActivity, app } from "desk-frame";
import page from "./page";

export class MainScreen extends PageViewActivity {
  static ViewBody = page;

  onHelloClick() {
    app.showAlertDialogAsync("Hello, world!", "You clicked?");
  }

  onCloseWindow() {
    window.close();
  }
}
