const { test, expect } = require("@playwright/test");

test.slow("Handle inputbox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Input Box -- First Name

  await expect(await page.locator("//input[@id='name']")).toBeVisible();
  await expect(await page.locator("//input[@id='name']")).toBeEmpty();
  await expect(await page.locator("//input[@id='name']")).toBeEditable();
  await expect(await page.locator("//input[@id='name']")).toBeEnabled();

  await page.locator("//input[@id='name']").fill("Jhon");

  await page.waitForTimeout(4000); //pausing code

  // Radio Button

  await page.locator("//input[@value='male']").check();
  await expect.soft(await page.locator("//input[@value='male']")).toBeChecked();
  await expect(
    await page.locator("//input[@value='male']").isChecked()
  ).toBeTruthy();
  await expect(
    await page.locator("//input[@value='female']").isChecked()
  ).toBeFalsy();
});
