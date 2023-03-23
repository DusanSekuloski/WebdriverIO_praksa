import data from "../data/users_data.js";
class LoginPage {
  
  async logIn(username, password) {
    await browser.url("/");
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await browser.pause(2000);
    await this.loginButton.click();
    await browser.url('https://www.saucedemo.com/inventory.html');
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    await browser.pause(2000);
  }
  
  async enterUsernameAndPassword(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
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
