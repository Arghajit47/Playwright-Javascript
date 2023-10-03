const { test, expect, chromium } = require("@playwright/test");

test("Initiate 2 pages manually and visit 2 different pages", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const allPages = context.pages();
  console.log("No. of Pages created: ", allPages.length);

  await page1.goto("https://www.google.com");
  await expect(page1).toHaveTitle("Google");

  await page1.goto("https://www.facebook.com");
  await expect(page1).toHaveTitle("Facebook – log in or sign up");

  page1.close();
  page2.close();
});

test("Handling new pages", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page3 = await context.newPage();

  const allPages = context.pages();
  console.log("No. of Pages created: ", allPages.length);

  await page3.goto("https://testautomationpractice.blogspot.com/");
  await page3.waitForLoadState();
  await expect(page3).toHaveTitle("Automation Testing Practice");

  const pagePromise = context.waitForEvent("page");
  await page3.click('button[onclick="myFunction()"]');

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle("Your Store");

  await page3.waitForTimeout(3000);
  await newPage.waitForTimeout(3000);

  await page3.close();
  await newPage.close();
});
