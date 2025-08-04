import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '@supports/hook';
import { HOME_PAGE, LOGIN_PAGE } from '@elements/index';
import * as dotenv from 'dotenv';

dotenv.config();

const url = process.env.BASE_URL as string;
const user = process.env.USERNAME as string;
const pass = process.env.PASSWORD as string;

Given('I have access to Shift Management', async () => {
  await page.goto(url);
});

When('I perform Login', async () => {
  await page.locator(LOGIN_PAGE.TXT_EMAIL).first().fill(user);
  await page.locator(LOGIN_PAGE.TXT_PASSWORD).first().fill(pass);
  await page.locator(LOGIN_PAGE.TXT_SUBMIT).click();
});

Then('the Home page should display', async () => {
  await expect(page.locator(HOME_PAGE.ICON_USER)).toBeVisible();
});
