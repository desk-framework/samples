import { Activity, app } from "@desk-framework/frame-core";
import page from "./page.js";

export class CountActivity extends Activity {
  /** The current count */
  count = 0;

  protected ready() {
    this.view = new page();
    app.showPage(this.view);
  }

  /** Event handler: called when Up is clicked */
  onCountUp() {
    this.count++;
  }

  /** Event handler: called when Down is clicked */
  onCountDown() {
    if (this.count > 0) this.count--;
  }
}

// Enable HMR:
if (typeof module !== "undefined") app.hotReload(module, CountActivity);
