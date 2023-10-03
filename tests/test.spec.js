const { test, expect } = require("@playwright/test");

test.slow("Home Page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = page.title();
  console.log(pageTitle);

  await expect(await page).toHaveTitle("STORE");

  const pageUrl = page.url();
  console.log(pageUrl);

  await page.locator("[id='login2']").click();

  await page.fill("#loginusername", "pavanol");

  await page.type("input[id='loginpassword']", "test@123");

  await page.click('//button[normalize-space()="Log in"]');

  await expect(
    await page.locator("//a[normalize-space()='Log out']")
  ).toBeVisible();

  await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

  //for multiple elements location -- Product Names

  const links = await page.$$("//div[@id='tbodyid']//div//h4/a");

  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }

  await page.close();
});
