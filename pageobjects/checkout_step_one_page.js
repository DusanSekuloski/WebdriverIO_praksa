import { faker } from "@faker-js/faker";
class CheckoutStepOnePage {
  async enterCheckoutInformation() {
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomZipCode = faker.datatype.number({ min: 10000, max: 99999 });
    await this.firstNameField.setValue(randomFirstName);
    await this.lastNameField.setValue(randomLastName);
    await this.zipPostalCodeField.setValue(randomZipCode);
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

  get firstNameMessageError() {
    return $("//h3[text()='Error: First Name is required']");
  }
}

export default new CheckoutStepOnePage();
