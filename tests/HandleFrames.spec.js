const { test, expect } = require("@playwright/test");

test("Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //Total number of Iframes
  const allFrames = await page.frames();
  console.log("Number of Frames : ", allFrames.length);

  //Approach 1 : Using name or Url
  // const var = await page.frame('name');  //If name is present
  const frame1 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame1.fill('[name="mytext1"]', "Hello");

  await page.waitForTimeout(5000);

  //Approach 2 : Using Frame Locator
  const app2 = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator('[name="mytext1"]');
  await app2.fill("Arghajit");
  await page.waitForTimeout(5000);
});
