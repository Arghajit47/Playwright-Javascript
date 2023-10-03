const { test, expect } = require("@playwright/test");
let page;

test.beforeAll("Login", async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  console.log("Log in successful");
});
test.describe("Group", async () => {
  test("Products", async () => {
    const products = await page.$$(".hrefch");
    await expect(products).toHaveLength(9);
  });

  test("Add to Cart", async () => {
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();

    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  });
});

test.afterAll("Log Out", async () => {
  await page.getByRole("link", { name: "Log out" }).click();
  console.log("Log out successful");
});
