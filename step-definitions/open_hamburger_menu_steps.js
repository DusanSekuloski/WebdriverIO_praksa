import { Given, When, Then } from "@wdio/cucumber-framework";
import HamburgerMenu from "../pageobjects/hamburger_menu.js";

When(/^the user clicks on the hamburger menu button$/, async () => {
  await HamburgerMenu.clickHamburgerMenuButton();
  await browser.pause(2000);
});

Then(/^the hamburger menu opens$/, async () => {
  const elem = await $("//div[@class='bm-menu-wrap']");
  await expect(elem).toBeDisplayed();
  await browser.pause(2000);
});
