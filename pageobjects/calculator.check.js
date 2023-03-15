class CalculatorCheck {

    get usernameField() {
        return $("//input[@id='user-name']");
    }

    get passwordField() {
        return $("//input[@id='password']");
    }

    get submitButton() {
        return $('input[type="submit"]');
    }
    get orderButtona() {
        return $("//div/button[@id='add-to-cart-sauce-labs-backpack']")
    }
    get orderButtonb(){
        return $("//div/button[@id='add-to-cart-sauce-labs-bike-light']")
    }
    get orderButtonc() {
        return $("//div/button[@id='add-to-cart-sauce-labs-bolt-t-shirt']")
    }
    get cartIcon() {
        return $("//a[@class='shopping_cart_link']")
    }
    get checkoutButton() {
        return $("//button[@id='checkout']")
    }
    get firstnameField() {
        return $("//input[@id='first-name']")
    }
    get lasttnameField() {
        return $("//input[@id='last-name']")
    }
    get postalcodeField() {
        return $("//input[@id='postal-code']")
    }
    get continueButton() {
        return $("//input[@id='continue']")
    }
    get textMessage() {
        return $("//div[text()='60.45']")
    }

    async enterUsernameandPassword() {
        await this.usernameField.setValue("standard_user");
        await this.passwordField.setValue("secret_sauce");

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
    async clickOrderButtona() {
        await this.orderButtona.click();
    }
    async clickOrderButtonb() {
        await this.orderButtonb.click();
    }
    async clickOrderButtonc(){
        await this.orderButtonc.click();
    }
    async clickCartIcon() {
        await this.cartIcon.click();
    }
    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
    async enterFirstNameandLastNameandPostalCode() {
        await this.firstnameField.setValue("John");
        await this.lasttnameField.setValue("Trump")
        await this.postalcodeField.setValue("1000")
    }
    async clickContinueButton() {
        await this.continueButton.click();
    
    }
    async getTextMessage() {
        await this.textMessage.getText();
    }
}

export default new CalculatorCheck();