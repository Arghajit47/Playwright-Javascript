const { test, expect } = require("@playwright/test");

test("Webtable Elements", async ({ page }) => {
  test.slow();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForLoadState();

  await page.locator("#productTable").scrollIntoViewIfNeeded();
  const table = await page.locator("#productTable");

  //Total number of rows & columns
  const columns = await table.locator("thead tr th");
  console.log(`Number of Columns:`, await columns.count());
  await expect(await columns.count()).toBe(4);

  const rows = await table.locator("tbody tr");
  console.log(`Number of Rows:`, await rows.count());
  await expect(await rows.count()).toBe(5);

  //Select check box for product 4
  const matchedRow = await rows.filter({
    has: await page.locator("td"),
    hasText: "Product 4",
  });
  await matchedRow.locator("input").check();
  await page.waitForTimeout(5000);

  //Select multiple products by reusing function
  await selectProduct(rows, page, "Product 1");
  await selectProduct(rows, page, "Product 5");
  await selectProduct(rows, page, "Product 3");

  await page.waitForTimeout(5000);

  //Print all product details using loop
  for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const tds = row.locator("td");

    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }

  //Read data from all the pages in the table
  const pages = await page.locator(".pagination li a");
  console.log("Number of pages in Webtable:", await pages.count());
  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const tds = row.locator("td");

      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
    await page.waitForTimeout(3000);
  }
  await page.waitForTimeout(3000);
});

//JS Function to select multiple checkox
async function selectProduct(rows, page, name) {
  const matchedRow = await rows.filter({
    has: await page.locator("td"),
    hasText: name,
  });
  await matchedRow.locator("input").check();
}
