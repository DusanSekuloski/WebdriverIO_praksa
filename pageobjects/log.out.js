class LogOut {

    get usernameField() {
        return $("//input[@id='user-name']");
    }

    get passwordField() {
        return $("//input[@id='password']");
    }

    get submitButton() {
        return $('input[type="submit"]');
    }

    get burgerButton() {
        return $("//button[@id='react-burger-menu-btn']");
    }
    get logoutOption() {
        return $("//a[@id='logout_sidebar_link']")
    }

    async enterUsernameandPassword() {
        await this.usernameField.setValue("standard_user");
        await this.passwordField.setValue("secret_sauce");

    }
    async clickLoginButton() {
        await this.submitButton.click();
    }
    async clickBurgerMenu() {
        await this.burgerButton.click();
    }
    async clickLogoutButton() {
        await this.logoutOption;
    }
}

export default new LogOut();