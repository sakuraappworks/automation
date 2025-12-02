import { Then, When } from '@cucumber/cucumber';
import { DASHBOARD_PAGE, LEDGER_DETAIL_PAGE, MASTER_MAINTENANCE_PAGE } from '@elements/index';
import { expect } from '@playwright/test';
import { page } from '@supports/hook';

When('I navigate to Master Maintenance', async () => {
  await page.locator(DASHBOARD_PAGE.MENU_MASTER).click();
});

Then('the Master Maintenance page should display', async () => {
  await expect(page.locator(MASTER_MAINTENANCE_PAGE.BTN_CREATE_STORE)).toBeVisible();
});

When('I click on Create New Store', async () => {
  await page.locator(MASTER_MAINTENANCE_PAGE.BTN_CREATE_STORE).click();
});

Then('the Create Store form should display', async () => {
  await expect(page.locator(MASTER_MAINTENANCE_PAGE.TXT_STORE_NAME)).toBeVisible();
});

When('I click on Create New Employee', async () => {
  await page.locator(MASTER_MAINTENANCE_PAGE.TAB_EMPLOYEE).click();
  await page.locator(MASTER_MAINTENANCE_PAGE.BTN_CREATE_EMPLOYEE).click();
});

Then('the Create Employee form should display', async () => {
  await expect(page.locator(MASTER_MAINTENANCE_PAGE.TXT_EMPLOYEE_CODE)).toBeVisible();
});

When('I click on Create New Company', async () => {
  await page.locator(MASTER_MAINTENANCE_PAGE.TAB_COMPANY).click();
  await page.locator(MASTER_MAINTENANCE_PAGE.BTN_CREATE_COMPANY).click();
});

Then('the Create Company form should display', async () => {
  await expect(page.locator(MASTER_MAINTENANCE_PAGE.TXT_COMPANY_DIRECTOR)).toBeVisible();
});

When('I click on Create New Zone', async () => {
  await page.locator(MASTER_MAINTENANCE_PAGE.TAB_AREA).click();
  await page.locator(MASTER_MAINTENANCE_PAGE.BTN_ZONE).click();
  await page.locator(MASTER_MAINTENANCE_PAGE.BTN_ADD_ZONE).click();
});

Then('the Create Zone form should display', async () => {
  await expect(page.locator(MASTER_MAINTENANCE_PAGE.TXT_ZONE_NAME)).toBeVisible();
});

When('I click on Create New Area', async () => {
  await page.locator(MASTER_MAINTENANCE_PAGE.TAB_AREA).click();
  await page.locator(MASTER_MAINTENANCE_PAGE.BTN_AREA).click();
  await page.locator(MASTER_MAINTENANCE_PAGE.BTN_ADD_ZONE).click();
});

Then('the Create Area form should display', async () => {
  await expect(page.locator(MASTER_MAINTENANCE_PAGE.TXT_RANK)).toBeVisible();
});

When('I click on Create New Authority', async () => {
  await page.locator(MASTER_MAINTENANCE_PAGE.TAB_AUTHORITY).click();
  await page.waitForTimeout(1000);
  await page.locator(MASTER_MAINTENANCE_PAGE.BTN_ADD_PERMISSION).last().click();
});

Then('the Create Authority form should display', async () => {
  await expect(page.locator(MASTER_MAINTENANCE_PAGE.TXT_EMPLOYEE_LOOKUP)).toBeVisible();
});

When('I click on Basic Ledger', async () => {
  await page.locator(LEDGER_DETAIL_PAGE.TAB_BASIC_LEDGER).click();
});

Then('the Basic Ledger page should display', async () => {
  await expect(page.locator(LEDGER_DETAIL_PAGE.BTN_UPDATE)).toBeVisible();
});
