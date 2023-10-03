const { test, expect } = require("@playwright/test");

test("Mouse Hover in Date Picker via Calender", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Date Picker via Calender
  const year = "2024";
  const month = "March";
  const date = "20";

  await page.click("#datepicker");
  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();
    if (currentYear == year && currentMonth == month) {
      break;
    }
    await page.locator('[title="Next"]').click(); //Next Button
  }
  const currentDates = await page.$$("//a[@class='ui-state-default']");

  //Date selection
  for (const dates of currentDates) {
    if ((await dates.textContent()) == date) {
      await dates.hover();
      break;
    }
  }
  await page.waitForTimeout(5000);
  await page.close();
});

test("Mouse Hover", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  const desktop = await page.locator('//a[normalize-space()="Desktops"]');
  const macbook = await page.locator('//a[normalize-space()="Mac (1)"]');

  //mouse hover
  await desktop.hover();
  await macbook.hover();

  await page.waitForTimeout(5000);
});
