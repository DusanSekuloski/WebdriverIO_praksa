import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/loginPage.js'; 

Given(/^user is on login page$/, () => {
	browser.url('/');
});

When(/^user enters username and password$/, () => {
	LoginPage.enterUsernameAndPassword();
});

When(/^clicks on login button$/, () => {
	LoginPage.clickLoginButton();
});

Then(/^the user is logged in$/, () => {
	browser.pause(10000);
});



