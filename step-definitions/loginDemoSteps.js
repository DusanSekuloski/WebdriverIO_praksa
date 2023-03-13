import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/loginPage.js'; 

Given(/^user is on login page$/, async () => {
	await browser.url('/');
});

When(/^user enters username and password$/, async () => {
	await LoginPage.enterUsernameAndPassword();
});

When(/^clicks on login button$/, async () => {
	await LoginPage.clickLoginButton();
});

Then(/^the user is logged in$/, async () => {
	await browser.pause(10000);
});



