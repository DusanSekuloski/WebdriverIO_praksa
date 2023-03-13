
class LoginPage {

    get usernameField() { return $('//input[@data-test="username"]'); }
    get passwordField() { return $("//input[@name='password']"); }
    get loginButton() { return $('//input[@id="login-button"]'); }

    async enterUsernameAndPassword() {
        await this.usernameField.setValue('standard_user');
        await this.passwordField.setValue('secret_sauce123');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

}

export default new LoginPage();
