class LockedOutUser {
    
    get usernameField () {
        return $("//input[@id='user-name']");
    }

    get passwordField () {
        return $("//input[@id='password']");
    }

    get submitButton () {
        return $('input[type="submit"]');
    }
    get errorMessage () {
        return $("//h3[@data-test='error' or text()='Epic sadface: Sorry, this user has been locked out.']")
    }


    async enterUsernameandPassword() {
        await this.usernameField.setValue("standard_user");
        await this.passwordField.setValue("locked_out_user");

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
    async getErrorMessage() {
        await this.errorMessage.getText();
    }
}

export default new LockedOutUser();