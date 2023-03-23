import { Given, When, Then } from "@wdio/cucumber-framework";
import HamburgerMenu from "../pageobjects/hamburger_menu.js";

When(/^the user clicks on the logout button$/, async () => {
  await HamburgerMenu.clickLogoutButton();
  await browser.pause(2000);
});
