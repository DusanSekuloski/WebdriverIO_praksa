class CartPage {
  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }

  async clickContinueShoppingButton() {
    await this.continueShoppingButton.click();
  }

  async clickRemoveFromCartButton() {
    await this.removeFromCartButton.click();
  }

  get checkoutButton() {
    return $("//button[@id='checkout']");
  }

  get continueShoppingButton() {
    return $("//button[@id='continue-shopping']");
  }

  get removeFromCartButton() {
    return $("//button[@id='remove-sauce-labs-onesie']");
  }
}

export default new CartPage();
