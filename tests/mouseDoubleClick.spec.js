const { test, expect } = require("@playwright/test");

test("Mouse Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const text = await page.locator("#field1").getAttribute("value");
  console.log(text);

  await page.dblclick('button[ondblclick="myFunction1()"]');

  await expect(await page.locator("#field2")).toHaveValue(text);
  await page.waitForTimeout(5000);
});
