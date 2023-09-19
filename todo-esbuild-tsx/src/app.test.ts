// import all tests
import { formatTestResults, runTestsAsync } from "@desk-framework/frame-test";
import "./todo/TodoActivity.test.js";

runTestsAsync().then((result) => {
	console.log(formatTestResults(result));
	if (result.failed) process.exit(1);
});
