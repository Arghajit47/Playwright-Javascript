const { test, expect } = require("@playwright/test");

test("Keyboard Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForLoadState();

  await page.fill("#name", "Arghajit Singha");
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await page.click("#email");
  await page.keyboard.press("Control+V");

  await page.waitForTimeout(5000);
});
