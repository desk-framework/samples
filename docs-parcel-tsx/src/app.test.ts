import { formatTestResults, runTestsAsync } from "@desk-framework/test";
import "./counter/CountActivity.test.js";

runTestsAsync().then((result) => {
  console.log(formatTestResults(result));
  if (result.failed) process.exit(1);
});
