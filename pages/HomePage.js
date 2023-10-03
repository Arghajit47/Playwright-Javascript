const { test, expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.product = ".hrefch";
    this.firstProduct = "//a[contains(text(),'Samsung galaxy s6')]";
  }

  async checkProducts(count) {
    const allProducts = await this.page.$$(this.product);
    console.log("Numbers of Products: ", allProducts.length);
    await this.page.waitForLoadState();
  }

  async clickOnProduct() {
    await this.page.locator(this.firstProduct).click();
    await this.page.waitForLoadState();
  }
};
