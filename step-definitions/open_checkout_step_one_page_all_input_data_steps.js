import { Given, When, Then } from "@wdio/cucumber-framework";
import CartPage from "../pageobjects/cart_page.js";
import InventoryPage from "../pageobjects/inventory_page.js";

When(/^the user opens the cart page$/, async () => {
  await InventoryPage.openCartPage();
});

When(/^the user clicks on the checkout button$/, async () => {
  await CartPage.clickCheckoutButton();
});

Then(/^the user is on the checkout step one page$/, async () => {
  await browser.url("https://www.saucedemo.com/checkout-step-one.html");
  await expect(browser).toHaveUrl(
    "https://www.saucedemo.com/checkout-step-one.html"
  );
});
