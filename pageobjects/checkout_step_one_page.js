import data from "../data/users_data.js";
class CheckoutStepOnePage {
  
  async enterCheckoutInformation(firstName, lastName, zipCode) {
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.setValue(lastName);
    await this.zipPostalCodeField.setValue(zipCode);
  }
  
  async enterFirstName() {
    await this.firstNameField.setValue(firstName);
  }

  async enterLastName() {
    await this.lastNameField.setValue(lastName);
  }

  async enterZipPostalCode() {
    await this.zipPostalCodeField.setValue(zipCode);
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickCancelButton() {
    await this.cancelButton.click();
  }

  async clickBackHomeButton() {
    await this.backHomeButton.click();
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

  get backHomeButton() {
    return $("//button[@name='back-to-products']");
  }

  }


export default new CheckoutStepOnePage();
