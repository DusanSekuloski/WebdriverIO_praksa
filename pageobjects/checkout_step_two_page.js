class CheckoutStepTwoPage {
  async clickFinishButton() {
    await this.finishButton.click();
  }

  async clickCancelButton() {
    await this.cancelButton.click();
  }

  get finishButton() {
    return $("//button[@id='finish']");
  }

  get cancelButton() {
    return $("//button[@id='cancel']]");
  }
}

export default new CheckoutStepTwoPage();
