import { PageViewActivity, app } from "desk-frame";
import page from "./page.js";

export class CountActivity extends PageViewActivity {
  static ViewBody = page;

  /** The current count */
  count = 0;

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
