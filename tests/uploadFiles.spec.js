const { test, expect } = require("@playwright/test");

test("Single File", async ({ page }) => {
  await page.goto("https://www.foundit.in/");
  await page.waitForLoadState();
  await page.waitForSelector(".mqfihd-upload");

  await page.click(".mqfihd-upload");
  await page
    .locator("#file-upload")
    .setInputFiles("uploadFiles/Score Report _1.pdf");

  await page.waitForTimeout(5000);
});

test.fixme("Multiple Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "uploadFiles/Score Report _1.pdf",
      "uploadFiles/Score Report _2.pdf",
    ]);
  await expect(await page.locator("//ul[@id='fileList']/li[1]")).toHaveText(
    "Score Report _1.pdf"
  );
  await expect(await page.locator("//ul[@id='fileList']/li[2]")).toHaveText(
    "Score Report _2.pdf"
  );
});
