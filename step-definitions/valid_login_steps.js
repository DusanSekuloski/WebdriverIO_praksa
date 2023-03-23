import { Given, When, Then } from "@wdio/cucumber-framework";
import users_data from "../data/users_data.js";
import LoginPage from "../pageobjects/login_page.js";

When(/^the user enters valid username and password$/, async () => {
  await LoginPage.enterUsernameAndPassword(
    users_data.username,
    users_data.password
  );
});

When(/^clicks on the login button$/, async () => {
  await LoginPage.clickLoginButton();
});

Then(/^the user is logged in$/, async () => {
  await browser.url("https://www.saucedemo.com/inventory.html");
  await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  await browser.pause(2000);
});
