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
    await browser.pause(2000);
    
});
Then(/^User click button 'Add to cart'$/, async () => {
    await $("//button[@id='add-to-cart-sauce-labs-onesie']").click();
    await $("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']").click();
    await browser.pause(2000);
});
Then(/^User click on the 'Cart' icon$/, async () => {
    await $("//a[@class='shopping_cart_link']").click();
    await browser.pause(2000);
});
Then (/^User click on the 'Checkout' button$/, async () => {
    await $("//button[@id='checkout']").click();
    await browser.pause(2000);
});
Then (/^User fill fields with user data$/, async () => {
    await $("//input[@id='first-name']").setValue('John');
    await $("//input[@id='last-name']").setValue('Trump');
    await $("//input[@id='postal-code']").setValue(22111);
    await $("//input[@id='continue']").click();
    await browser.pause(2000);
});
When(/^User click button 'Continue'$/, async () => {
    await $("//input[@id='continue']");
    await browser.pause(2000);
});
Then(/^Calculator price should be correct$/, async () => {
    const elem =await $("//div[@class='summary_info_label summary_total_label' and text()='25.90']").getText();

});