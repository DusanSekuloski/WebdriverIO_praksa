import { Given, When, Then } from '@wdio/cucumber-framework';


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
    var url = browser.getUrl();
    console.log(url);
    await browser.pause(2000);

});
When(/^User click on the option product sort container$/, async () => {
    await $("//select[@class='product_sort_container']").click();
    

});

Then(/^User should sort item according to price and alphabetical order$/, async () => {
    await $("//select/option[@value='az']").click();
    
    await $("//select/option[@value='za']").click();
    
    await $("//select/option[@value='lohi']").click();
    
    await $("//select/option[@value='hilo']").click();
    

});