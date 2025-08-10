import { After, AfterAll, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, Page, chromium } from '@playwright/test';
import { closePool, queryFromFile } from '@util/index';

let page: Page;
let browser: Browser;

setDefaultTimeout(60000);

Before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    locale: 'ja-JP',
  });
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await page.screenshot({
      path: `./reports/screenshots/${scenario.pickle.name}.png`,
    });
    this.attach(screenshot, 'image/png');
  }
  await page.close();
  await browser.close();
});

AfterAll(async () => {
  await queryFromFile('tests/supports/sql/clean_up.sql');
  await closePool();
});

export { page, browser };
