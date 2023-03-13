/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get usernameField () {
        return $('//input[@data-test="username"]');
    }

    get passwordField () {
        return $("//input[@name='password']");
    }

    get loginButton () {
        return $('//input[@id="login-button"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     enterUsernameAndPassword () {
        this.usernameField.setValue('standard_user');
        this.passwordField.setValue('secret_sauce');
    }

    clickLoginButton() {
        this.loginButton.click();
    }

}

export default new LoginPage();
