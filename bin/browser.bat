@echo off
ECHO Presenting slides in browser...
node_modules\chromium\lib\chromium\chrome-win32\chrome.exe --allow-file-access-from-files --no-default-browser-check --disable-infobars %CD%/docs/index.html
ECHO Browser closed...