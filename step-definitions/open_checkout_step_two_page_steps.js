import { Given, When, Then } from "@wdio/cucumber-framework";
import CheckoutStepOnePage from "../pageobjects/checkout_step_one_page.js";

When(/^the user clicks on the continue button$/, async () => {
  await CheckoutStepOnePage.clickContinueButton();
  await browser.pause(2000);
});

Then(/^the user is on the checkout step two page$/, async () => {
  await browser.url("https://www.saucedemo.com/checkout-step-two.html");
  await expect(browser).toHaveUrl(
    "https://www.saucedemo.com/checkout-step-two.html"
  );
  await browser.pause(2000);
});
