import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login_page.js";
import InventoryPage from "../pageobjects/inventory_page.js";
import InventoryItemPage from "../pageobjects/inventory_item_page.js";
import HamburgerMenu from "../pageobjects/hamburger_menu.js";
import CheckoutStepTwoPage from "../pageobjects/checkout_step_two_page.js";
import CartPage from "../pageobjects/cart_page.js";
import users_data from "../data/users_data.js";

When(/^the user clicks on the finish button$/, async () => {
  await CheckoutStepTwoPage.clickFinishButton();
  await browser.pause(2000);
});

Then(/^the user is on the checkout complete page$/, async () => {
  await browser.url("https://www.saucedemo.com/checkout-complete.html");
  await expect(browser).toHaveUrl(
    "https://www.saucedemo.com/checkout-complete.html"
  );
});
