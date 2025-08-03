const options = [
  '--require-module ts-node/register',
  '--require-module tsconfig-paths/register',
  '--require tests/supports/**/*.ts',
  '--require tests/steps/**/*.ts',
  '--format progress-bar',
  '--format @cucumber/pretty-formatter',
  '--format json:reports/cucumber_report.json',
].join(' ');

const features = ['tests/features/', options].join(' ');

module.exports = {
  default: features,
};
