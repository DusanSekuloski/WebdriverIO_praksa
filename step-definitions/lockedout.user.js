import { Given, When, Then } from '@wdio/cucumber-framework';

import LockedOutUser from '../pageobjects/lockedout.user.js';

Given(/^User is on login page$/, async () => {
    await browser.url("/");
});

When(/^User enters invalid username and valid password$/, async () => {
    await LockedOutUser.enterUsernameandPassword();
});

When(/^Clicks login button$/, async () => {
    await LockedOutUser.clickLoginButton();
});

Then(/^User is not logged in$/, async () => {
    await LockedOutUser.getErrorMessage();
    await browser.pause(2000);
});
