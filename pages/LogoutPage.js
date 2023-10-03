const { test, expect } = require("@playwright/test");

exports.LogoutPage = class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logout = "Log out";
  }

  async clickOnLogoutButton() {
    await this.page.getByRole("link", { name: this.logout }).click();
    await this.page.waitForLoadState();
  }
};
