import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login_page.js";
import InventoryPage from "../pageobjects/inventory_page.js";
import InventoryItemPage from "../pageobjects/inventory_item_page.js";
import HamburgerMenu from "../pageobjects/hamburger_menu.js";
import CheckoutStepOnePage from "../pageobjects/checkout_step_one_page.js";
import CartPage from "../pageobjects/cart_page.js";
import users_data from "../data/users_data.js";

When(/^the user clicks on the continue button$/, async () => {
  await CheckoutStepOnePage.clickContinueButton();
  await browser.pause(2000);
});

Then(/^the user is on the checkout step two page$/, async () => {
  await browser.url("https://www.saucedemo.com/checkout-step-two.html");
  await expect(browser).toHaveUrl(
    "https://www.saucedemo.com/checkout-step-two.html"
  );
});
