import { Given, When, Then, } from '@wdio/cucumber-framework';


Given(/^User is on login page$/, async () => {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow()
    
    
});

When(/^User enter username and password$/, async () => {
    await $("//input[@name='user-name']").setValue('standard_user');
    await $("//input[@name='password']").setValue('secret_sauce');
    await $("//input[@type='submit']").click();
    
});

Then(/^User should be on the product page$/, async () => {
    var url =browser.getUrl();
    console.log(url);
    
    
});

When (/^User click menu option$/, async () => {
    await $("//button[@id='react-burger-menu-btn']").click();
    

});

When (/^Click Logout option$/, async () => {
    await $("[id='logout_sidebar_link']");
    await browser.pause(2000);

});

Then (/^User Logout from product page$/, async () => {
    var url =browser.getUrl();
    console.log(url);
    await browser.pause(2000);

});