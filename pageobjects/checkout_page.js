class CheckoutPage {
  async enterFirstName() {
    await this.firstNameField.setValue("Dusan");
  }

  async enterLastName() {
    await this.lastNameField.setValue("Sekuloski");
  }

  async enterZipPostalCode() {
    await this.zipPostalCodeField.setValue("11050");
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickCancelButton() {
    await this.cancelButton.click();
  }

  async clickFinishButton() {
    await this.finishButton.click();
  }

  get firstNameField() {
    return $("//input[@id='first-name']");
  }

  get lastNameField() {
    return $("//input[@id='last-name']");
  }

  get zipPostalCodeField() {
    return $("//input[@id='postal-code']");
  }

  get continueButton() {
    return $("//input[@id='continue']");
  }

  get cancelButton() {
    return $("//button[@id='cancel']]");
  }

  get finishButton() {
    return $("//button[@id='finish']");
  }
}

export default new CheckoutPage();
