const { test, expect } = require("@playwright/test");
test.slow();
const name = "Arghajit";

test("Alerts With OK", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  //Enabling Alert handling
  await page.on("dialog", async (dialog) => {
    await console.log(dialog.type);
    await console.log(dialog.message);
    await dialog.accept();
  });
  //Click on the Button to trigger the alert
  await page.click("//button[text()='Alert']");
  await page.waitForTimeout(5000);

  //Enabling Prompt handling
  // page.on('dialog', async (dialog) => {

  // })
});
test("Confirm Box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  //Enabling Confirm Box handling
  await page.on("dialog", async (dialog) => {
    await console.log(dialog.type);
    await console.log(dialog.message);
    await dialog.accept();
  });
  //Click on the Button to trigger the Confirm Box
  await page.click("//button[text()='Confirm Box']");
  await page.waitForTimeout(5000);
  await expect(page.locator("#demo")).toHaveText("You pressed OK!");
});

test("Prompt", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  //Enabling Prompt handling
  await page.on("dialog", async (dialog) => {
    await console.log(dialog.type);
    await console.log(dialog.message);
    await expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept(name); // Close by using OK Button
  });
  //Click on the Button to trigger the Prompt
  await page.click("button[onclick='myFunctionPrompt()']");
  await page.waitForTimeout(5000);
  await expect(page.locator("#demo")).toHaveText(
    `Hello ${name}! How are you today?`
  );
});
