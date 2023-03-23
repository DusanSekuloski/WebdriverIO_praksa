import { Given, When, Then } from "@wdio/cucumber-framework";
import CheckoutCompletePage from "../pageobjects/checkout_complete_page.js";

When(/^the user clicks on the back home button$/, async () => {
  await browser.url("https://www.saucedemo.com/checkout-complete.html");
  await expect(browser).toHaveUrl(
    "https://www.saucedemo.com/checkout-complete.html"
  );

  await CheckoutCompletePage.clickBackHomeButton();
  await browser.url("https://www.saucedemo.com/inventory.html");
  await browser.pause(2000);
});
