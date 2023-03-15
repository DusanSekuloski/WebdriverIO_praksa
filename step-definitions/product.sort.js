import { Given, When, Then } from '@wdio/cucumber-framework';

import ProductSortContainer from '../pageobjects/product.sort.js';

Given(/^User is on login page$/, async () => {
    await browser.url("/");
});

When(/^User enters username and password$/, async () => {
    await ProductSortContainer.enterUsernameandPassword();
});

When(/^Clicks login button$/, async () => {
    await ProductSortContainer.clickLoginButton();
});

Then(/^User is logged in$/, async () => {
    await browser.getUrl();
});

When(/^User click on product sort container$/, async () => {
	await ProductSortContainer.clickProductSortOption()
});

When(/^User can select list of product in sort container options$/, async () => {
	await ProductSortContainer.clickSortProductAtoZ();
    await ProductSortContainer.clickSortProductZtoA();
    await ProductSortContainer.clickSortProductHightoLow();
    await ProductSortContainer.clickSortProductLowtoHigh();
    await browser.pause(2000);
});



