import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login_page.js";
import InventoryPage from "../pageobjects/inventory_page.js";
import InventoryItemPage from "../pageobjects/inventory_item_page.js";
import HamburgerMenu from "../pageobjects/hamburger_menu.js";
import CheckoutStepOnePage from "../pageobjects/checkout_step_one_page.js";
import CartPage from "../pageobjects/cart_page.js";
import users_data from "../data/users_data.js";

Given(/^the user is logged in on the Saucedemo website$/, async () => {
  await LoginPage.logIn(users_data.username, users_data.password);
});

When(/^the user opens the cart page$/, async () => {
  await InventoryPage.openCartPage();
});



