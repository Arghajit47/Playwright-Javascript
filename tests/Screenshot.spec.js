const { test, expect } = require("@playwright/test");

test("take a Google screenshot", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.screenshot({ path: "Screenshots/Google.png", fullPage: true });
});

test("take a Facebook screenshot", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.screenshot({ path: "Screenshots/facebook.png" });
});
