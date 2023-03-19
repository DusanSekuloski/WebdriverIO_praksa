class InventoryItemPage {
  async clickBackToProductsButton() {
    await this.backToProductsButton.click();
  }

  async clickAddToCartButton() {
    await this.addToCartButton.click();
  }

  async clickRemoveFromCartButton() {
    await this.removeFromCartButton.click();
  }

  async clickCartButton() {
    await this.cartButton.click();
  }

  get backToProductsButton() {
    return "//button[@id='back-to-products']";
  }

  get addToCartButton() {
    return $("//button[@id='add-to-cart-sauce-labs-onesie']");
  }

  get removeFromCartButton() {
    return $("//button[@id='remove-sauce-labs-onesie']");
  }

  get cartButton() {
    return $("//div[@id='shopping_cart_container']");
  }
}

export default new InventoryItemPage();
