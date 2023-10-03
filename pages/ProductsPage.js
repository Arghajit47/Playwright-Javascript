const { test, expect } = require("@playwright/test");

exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addToCart = '//a[normalize-space()="Add to cart"]';
  }

  async addToCartButton() {
    await this.page.locator(this.addToCart).click();
    await this.page.waitForLoadState();
    await this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }
};
