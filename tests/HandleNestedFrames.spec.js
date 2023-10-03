const { test, expect } = require("@playwright/test");

test("Nested Frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame2 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  //Nested Frames
  const childFrames = await frame2.childFrames();
  console.log("Number of Nested frames: ", childFrames.length);
  childFrames[0].locator("//div[@id='i5']").check();
  await expect(childFrames[0].locator("//div[@id='i5']")).toBeChecked();

  await page.waitForTimeout(5000);
});
