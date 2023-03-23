import { Given, When, Then } from "@wdio/cucumber-framework";
import CheckoutStepOnePage from "../pageobjects/checkout_step_one_page.js";
import users_data from "../data/users_data.js";

When(/^the user enters first name, last name and zip code$/, async () => {
  await CheckoutStepOnePage.enterCheckoutInformation(
    users_data.firstName,
    users_data.lastName,
    users_data.zipCode
  );
  await browser.pause(2000);
});

Then(/^the user bought a product$/, async () => {
  await browser.url("https://www.saucedemo.com/checkout-complete.html");
  await expect(browser).toHaveUrl(
    "https://www.saucedemo.com/checkout-complete.html"
  );

  const elem = await $("//h2[text()='Thank you for your order!']");
  await expect(elem).toHaveText("Thank you for your order!");
});
