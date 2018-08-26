// Richard Wen
// rrwen.dev@gmail.com

var chromium = require("chromium");
var execFile = require("child_process").execFile;
var path = require("path");

var slides = path.resolve("./docs/index.html");
console.log("Presenting slides in browser...");
execFile(chromium.path, [
	'--allow-file-access-from-files',
	'--no-default-browser-check',
	'--disable-infobars',
	slides], err => {
	if (err) {
		console.error(err);
	}
});
