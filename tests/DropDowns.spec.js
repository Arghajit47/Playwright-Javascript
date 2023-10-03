const { test, expect } = require("@playwright/test");

test.slow("Handle Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Multiple ways to select option from the dropdown

  await page.locator("#country").selectOption({ label: "India" }); //label - Visible by Text
  await page.waitForTimeout(2000);

  await page.locator("#country").selectOption("France"); //Visible by Text
  await page.waitForTimeout(2000);

  await page.locator("#country").selectOption({ value: "uk" }); //Select by Value
  await page.waitForTimeout(2000);

  await page.locator("#country").selectOption({ index: 8 }); //Select by Index(We need to count how many is there and count starts from 0)
  await page.waitForTimeout(2000);

  //Asertions -- Check the number of options in dropdown
  const options = await page.locator("#country option");
  await expect(options).toHaveCount(10);
});

test("Handle Multi Select Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Select Multiple options in dropdown

  await page.locator("#colors").selectOption(["Blue", "Red", "Yellow"]);
  await page.waitForTimeout(2000);

  //Asertions -- Check the number of options in dropdown
  const options = await page.locator("#colors option");
  await expect(options).toHaveCount(5);
});
