import { When, Then } from "@wdio/cucumber-framework";
import InventoryPage from "../pageobjects/inventory_page.js";

When(/^the user clicks on sort menu and selects name z to a$/, async () => {
  await InventoryPage.selectInventorySortButtonReverseAlphabeticalOrderOption();
});

Then(/^the products should be displayed in reverse alphabetical order$/, async () => {
    const elem = await $("//*[@class='inventory_item_name' and normalize-space()='Test.allTheThings() T-Shirt (Red)']");
    await expect(elem).toBeDisplayedInViewport();
  }
);
