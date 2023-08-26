import { describe, test, useTestContext } from "@desk-framework/test";
import { CountActivity } from "./CountActivity.js";

describe("Counter", (ctx) => {
  test("View shows 0 initially", async (t) => {
    let app = useTestContext();
    app.addActivity(new CountActivity(), true);
    await t.expectOutputAsync(100, { text: "0" });
  });

  test("View shows 1 when Up clicked", async (t) => {
    let app = useTestContext();
    app.addActivity(new CountActivity(), true);
    let out = await t.expectOutputAsync(100, { text: "Up" });
    out.getSingle().click();
    await t.expectOutputAsync(100, { text: "1" });
  });
});
