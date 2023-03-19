import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "expect-webdriverio";
import LoginPage from "../pageobjects/login_page.js";

Given(/^the user is on the login page$/, async () => {
  await browser.url("/");
});

When(/^the user enters invalid username and password$/, async () => {
  await LoginPage.enterInvalidUsernameAndPassword();
});

Then(/^The user remains on the login page$/, async () => {
  const message = "//h3[@data-test='error']";
   expect(message).toHaveText(
    "Epic sadface: Username and password do not match any user in this service"
  );
  await browser.pause(5000);
});
