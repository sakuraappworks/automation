import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '@supports/hook';
import { DASHBOARD_PAGE, MASTER_MAINTENANCE_PAGE } from '@elements/index';

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
