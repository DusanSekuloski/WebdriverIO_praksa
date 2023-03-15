class OrderProduct {

    get usernameField() {
        return $("//input[@id='user-name']");
    }

    get passwordField() {
        return $("//input[@id='password']");
    }

    get submitButton() {
        return $('input[type="submit"]');
    }
    get orderButton() {
        return $("//button[@class='btn btn_primary btn_small btn_inventory']")
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
    get finishButton() {
        return $("//button[@id='finish']")
    }
    get textMessage() {
        return $("//h2[text()='Thank you for your order!']")
    }

    async enterUsernameandPassword() {
        await this.usernameField.setValue("standard_user");
        await this.passwordField.setValue("secret_sauce");

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
    async clickOrderButton() {
        await this.orderButton.click();
    }
    async clickCartIcon() {
        await this.cartIcon.click();
    }
    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
    async enterFirstNameandLastNameandPostalCode() {
        await this.firstnameField.setValue("Nemanja");
        await this.lasttnameField.setValue("Stanisic")
        await this.postalcodeField.setValue("24000")
    }
    async clickContinueButton() {
        await this.continueButton.click();
    }
    async clickFinishButton() {
        await this.finishButton.click();
    }
    async getTextMessage() {
        await this.textMessage.getText();
    }
}

export default new OrderProduct();