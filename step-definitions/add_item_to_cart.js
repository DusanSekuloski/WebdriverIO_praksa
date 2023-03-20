import { Given, When, Then } from "@wdio/cucumber-framework";
import InventoryItemPage from "../pageobjects/inventory_item_page.js";

Given(/^the user is on the inventory page$/, async () => {
  await browser.url("https://www.saucedemo.com/inventory.html");
});

When(/^the user clicks on the add to cart button$/, async () => {
  await InventoryItemPage.clickAddToCartButton();
});

Then(/^the item should be added to the cart$/, async () => {
  await browser.pause(5000);
  const elem = await $("//button[@data-test='remove-sauce-labs-onesie']");
  return await expect(elem).toHaveId("remove-sauce-labs-onesie");
}
); 