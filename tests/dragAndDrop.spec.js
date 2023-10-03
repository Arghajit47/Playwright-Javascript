const { test, expect } = require("@playwright/test");

test("Drag and Drop", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#draggable").scrollIntoViewIfNeeded();

  const drag = await page.locator("#draggable");
  const drop = await page.locator("#droppable");

  await drag.hover();
  await page.mouse.down();

  await drop.hover();
  await page.mouse.up();

  await expect(
    await page.locator("//p[contains(text(),'Dropped!')]")
  ).toBeTruthy();

  await page.waitForTimeout(5000);
});
