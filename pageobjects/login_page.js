class LoginPage {


    async enterUsernameAndPassword() {
        await this.usernameField.setValue('standard_user');
        await this.passwordField.setValue('secret_sauce');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
    
    get usernameField() {
        return $("//input[@data-test='username']"); 
    } 
               
    get passwordField() { 
        return $("//input[@name='password']"); 
    }

    get loginButton() { 
        return $("//input[@id='login-button']"); 
    }

    

}

export default new LoginPage();
