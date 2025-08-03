import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '@supports/hook';
import * as dotenv from 'dotenv';

dotenv.config();

const url = process.env.BASE_URL as string;
const user = process.env.USERNAME as string;
const pass = process.env.PASSWORD as string;

Given('I have access to Shift Management', async () => {
  await page.goto(url);
});

When('I perform Login', async () => {
  await page.locator('//*[@id="employeeCode"]').first().fill(user);
  await page.locator('//*[@id="password"]').first().fill(pass);
  await page.locator('//*[@type="submit"]').click();
});

Then('the Home page should display', async () => {
  await expect(page.locator('//*[text()="HE"]')).toBeVisible();
});
