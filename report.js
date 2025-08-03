const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const options = {
  brandTitle: 'E2E Test Report',
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report_' + Date.now() + '.html',
  screenshotsDirectory: './screenshots/',
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: true,
};
// Making the directory if it doesn't exist
if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}
if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}
reporter.generate(options);
