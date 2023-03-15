
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'expect-webdriverio';
import LoginPage from '../pageobjects/login_page.js'; 


Given(/^the user is on the login page$/, async () => {
	await browser.url('/');
});

When(/^the user enters invalid username and password$/, async () => {
	await LoginPage.enterUsernameAndPassword();
});

When(/^clicks on the login button$/, async () => {
	await LoginPage.clickLoginButton();
});


Then(/^The user remains on the login page and a message appears$/, async () => {
	const message = await$("//h3[@data-test='error']");
    await expect(message).toHaveText('Epic sadface: Username and password do not match any user in this service');
	await browser.pause(5000);
	
}
);



