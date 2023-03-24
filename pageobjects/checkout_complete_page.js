class CheckoutCompletePage {
  async clickBackHomeButton() {
    await this.backHomeButton.click();
  }

  get backHomeButton() {
    return $("//button[@name='back-to-products']");
  }
}

export default new CheckoutCompletePage();
