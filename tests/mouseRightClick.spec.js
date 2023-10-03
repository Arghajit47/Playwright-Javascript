const { test, expect } = require("@playwright/test");

test("Mouse Right Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#name").click({ button: "right" }); //Right Click
  await page.waitForTimeout(5000);
});
