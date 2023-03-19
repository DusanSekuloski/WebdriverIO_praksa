import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login_page.js";

When(/^the user enters valid username and password$/, async () => {
  await LoginPage.enterUsernameAndPassword();
});

When(/^clicks on the login button$/, async () => {
  await LoginPage.clickLoginButton();
});

Then(/^the user is logged in$/, async () => {
  await browser.pause(5000);
});
