import { Given, When, Then } from "@wdio/cucumber-framework";
import InventoryItemPage from "../pageobjects/inventory_item_page.js";

Given(/^the user is on the inventory page$/, async () => {
  await browser.url("https://www.saucedemo.com/inventory.html");
});

When(/^the user clicks on the add to cart button$/, async () => {
  await InventoryItemPage.ClickAddToCartButton();
});

Then(/^the "([^"]*)" item should be added to the cart$/, async () => {
  const elem = await $("#elem");
  await expect(elem).toHaveId("remove-sauce-labs-onesie");
});
