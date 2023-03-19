import data from "../data/users_data.js";
class LoginPage {
  async enterUsernameAndPassword() {
    await this.usernameField.setValue(data.username);
    await this.passwordField.setValue(data.password);
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
