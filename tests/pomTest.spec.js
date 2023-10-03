const { test, expect } = require("@playwright/test");
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import { ProductsPage } from "../pages/ProductsPage";
let page;

test.beforeAll("test", async ({ browser }) => {
  page = await browser.newPage();
  const loginpage = new LoginPage(page);
  await loginpage.gotoLoginPage();
  await loginpage.login("pavanol", "test@123");
});
test.describe("Perform all the tests", async () => {
  test("Home Page", async () => {
    const homepage = new HomePage(page);
    await homepage.checkProducts(9);
    await homepage.clickOnProduct();
  });
  test("Add to Cart", async () => {
    const productspage = new ProductsPage(page);
    await productspage.addToCartButton();
  });
});
test.afterAll("Log Out", async () => {
  const logoutpage = new LogoutPage(page);
  await logoutpage.clickOnLogoutButton();
});
