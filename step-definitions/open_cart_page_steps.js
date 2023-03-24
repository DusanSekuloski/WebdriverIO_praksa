import { Given, When, Then } from "@wdio/cucumber-framework";
import InventoryPage from "../pageobjects/inventory_page.js";
import LoginPage from "../pageobjects/login_page.js";
import users_data from "../data/users_data.js";

Given(/^the user is logged in on the Saucedemo website$/, async () => {
  await LoginPage.logIn(users_data.username, users_data.password);
});

When(/^the user clicks on the cart button$/, async () => {
  await InventoryPage.clickCartButton();
  await browser.pause(2000);
});

Then(/^the user is on the cart page$/, async () => {
  await browser.url("https://www.saucedemo.com/cart.html");
  await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
});
