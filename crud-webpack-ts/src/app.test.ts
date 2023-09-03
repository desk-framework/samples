// Import all tests (run describe(...))
import "./services/ContactsService.test";
import "./integration.test";

import { formatTestResults, runTestsAsync } from "@desk-framework/test";
runTestsAsync().then((result) => {
	console.log(formatTestResults(result));
	if (result.failed) process.exit(1);
});
