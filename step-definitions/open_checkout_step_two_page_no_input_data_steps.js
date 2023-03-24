import { Given, When, Then } from "@wdio/cucumber-framework";
import CheckoutStepOnePage from "../pageobjects/checkout_step_one_page.js";

Then(/^the user remains on the checkout step one page$/, async () => {
  const elem = await $("//h3[text()='Error: First Name is required']");
  await expect(elem).toHaveText("Error: First Name is required");
  await browser.url("https://www.saucedemo.com/checkout-step-one.html");
  await expect(browser).toHaveUrl(
    "https://www.saucedemo.com/checkout-step-one.html"
  );
  await browser.pause(2000);
});
