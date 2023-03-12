import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^User is on login page$/, async () => {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow()
    await browser.pause(2000);
    
});

When(/^User enter username and password$/, async () => {
    await $("//input[@name='user-name']").setValue('locked_out_user');
    await $("//input[@name='password']").setValue('secret_sauce');
    await $("//input[@type='submit']").click();
    await browser.pause(2000);
});

Then(/^User is locked$/, async () => {
    const elem = await $("//h3[@data-test='error' and text()='Epic sadface: Sorry, this user has been locked out.']").getText();
    await browser.pause(2000);
    
});