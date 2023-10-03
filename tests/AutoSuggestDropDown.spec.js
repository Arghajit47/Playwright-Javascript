const { test, expect } = require("@playwright/test");

test("Handle Dropdown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  await page.locator("#src").fill("Delhi");
  await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");

  const cityOptions = await page.$$(
    "//li[contains(@class, 'sc-iwsKbI')]/div/text[1]"
  );
  for (const city of cityOptions) {
    const val = await city.textContent();
    console.log(val);
    if (val.includes("Delhi Airport")) {
      await city.click();
      break;
    } else {
      continue;
    }
  }
});
