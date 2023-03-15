import { Given, When, Then } from '@wdio/cucumber-framework';

import OrderProduct from '../pageobjects/order.product.js';

Given(/^User is on login page$/, async () => {
    await browser.url("/");
});

When(/^User enters username and password$/, async () => {
    await OrderProduct.enterUsernameandPassword();
});

When(/^Clicks login button$/, async () => {
    await OrderProduct.clickLoginButton();
});

Then(/^User is logged in$/, async () => {
    await browser.getUrl();
});
When(/^User order product$/, async () => {
    await OrderProduct.clickOrderButton();
});

Then(/^User clicks on 'cart' icon$/, async () => {
    await OrderProduct.clickCartIcon();
});

Then(/^User clicks on 'checkout' button$/, async () => {
    await OrderProduct.clickCheckoutButton();
});

Then(/^User fill data user fields$/, async () => {
    await OrderProduct.enterFirstNameandLastNameandPostalCode();
});

Then(/^User clicks on 'continue' button$/, async () => {
    await OrderProduct.clickContinueButton();
});

When(/^User clicks on 'finish' button$/, async () => {
    await OrderProduct.clickFinishButton();
});

Then(/^User ordered the product$/, async () => {
    await OrderProduct.getTextMessage();
    await browser.pause(2000);
});




