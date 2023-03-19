import data from "../data/users_data.js";
class LoginPage {
  async enterValidUsernameAndPassword() {
    await this.usernameField.setValue(data.validUsername);
    await this.passwordField.setValue(data.validPassword);
  }

  async enterInvalidUsernameAndPassword() {
    await this.usernameField.setValue(data.invalidUsername);
    await this.passwordField.setValue(data.invalidPassword);
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
