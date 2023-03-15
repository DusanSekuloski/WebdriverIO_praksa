import { Given, When, Then } from '@wdio/cucumber-framework';

import LogOut from '../pageobjects/log.out.js';


Given(/^User is on login page$/, async () => {
    await browser.url("/");
});

When(/^User enters username and password$/, async () => {
    await LogOut.enterUsernameandPassword();
});

When(/^Clicks login button$/, async () => {
    await LogOut.clickLoginButton();
});


Then(/^User is logged in$/, async () => {
    await browser.getUrl();
});

When(/^User clicks burger menu$/, async () => {
    await LogOut.clickBurgerMenu();
});
When(/^Clicks logout option$/, async () => {
    await LogOut.clickLogoutButton();
});
Then(/^User is logged out$/, async () => {
    await browser.pause(1000);
});
