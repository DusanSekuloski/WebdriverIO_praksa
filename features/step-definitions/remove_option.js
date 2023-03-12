import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^User is on login page$/, async () => {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow()
    await browser.pause(2000);
    
});

When(/^User enter username and password$/, async () => {
    await $("//input[@name='user-name']").setValue('standard_user');
    await $("//input[@name='password']").setValue('secret_sauce');
    await $("//input[@type='submit']").click();
    await browser.pause(2000);
});

Then(/^User should be on the product page$/, async () => {
    var url =browser.getUrl();
    console.log(url);
    await browser.pause(2000);

});

When(/^User order product$/, async () => {
    await $("//button[@id='add-to-cart-sauce-labs-bike-light']").click();
    await browser.pause(2000);
});
When(/^User open 'Cart'$/, async () => {
    await $("//div/a[@class='shopping_cart_link']").click();
    await browser.pause(2000);
});
When(/^User click option 'Remove'$/, async () => {
    await $("//button[text()='Remove']").click();
    await browser.pause(2000);
});
Then(/^Item is removed from 'Cart'$/, async () => {
    var url =browser.getUrl();
    console.log(url);
});



