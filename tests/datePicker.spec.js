const { test, expect } = require("@playwright/test");

test("Date Picker via direct input", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Date Picker via direct input
  await page.fill("#datepicker", "03/15/2024");
  await page.waitForTimeout(5000);
  await page.close();
});

test("Date Picker via Calender", async ({ page }) => {
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
      await dates.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
