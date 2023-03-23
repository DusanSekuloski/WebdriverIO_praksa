import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "expect-webdriverio";
import users_data from "../data/users_data.js";
import LoginPage from "../pageobjects/login_page.js";

Given(/^the user is on the login page$/, async () => {
  await browser.url("/");
});

When(/^the user enters invalid username and password$/, async () => {
  await LoginPage.enterUsernameAndPassword(
    users_data.invalidUsername,
    users_data.password
  );
});

Then(/^The user remains on the login page$/, async () => {
  await browser.url("https://www.saucedemo.com/");
  await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  await browser.pause(2000);
});
