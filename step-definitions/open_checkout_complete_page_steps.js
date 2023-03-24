import { Given, When, Then } from "@wdio/cucumber-framework";
import CheckoutStepTwoPage from "../pageobjects/checkout_step_two_page.js";

When(/^the user clicks on the finish button$/, async () => {
  await CheckoutStepTwoPage.clickFinishButton();
  await browser.pause(2000);
});

Then(/^the user is on the checkout complete page$/, async () => {
  await browser.url("https://www.saucedemo.com/checkout-complete.html");
  await expect(browser).toHaveUrl(
    "https://www.saucedemo.com/checkout-complete.html"
  );
});
