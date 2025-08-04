const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const options = {
  brandTitle: 'E2E Test Report',
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report_' + Date.now() + '.html',
  screenshotsDirectory: './reports/screenshots/',
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: false,
};
// Making the directory if it doesn't exist
if (!fs.existsSync('reports')) {
  fs.mkdirSync('reports');
}
if (!fs.existsSync('reports/screenshots')) {
  fs.mkdirSync('reports/screenshots');
}
reporter.generate(options);
