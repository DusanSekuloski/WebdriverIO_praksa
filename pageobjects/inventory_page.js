class InventoryPage {
  async openCartPage() {
    await this.cartButton.click();
    await browser.url("https://www.saucedemo.com/cart.html");
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
  }

  async clickCartButton() {
    await this.cartButton.click();
  }

  async clickHamburgerMenuButton() {
    await this.hamburgerMenuButton.click();
  }

  async clickAddToCartButton() {
    await this.addToCartButton.click();
  }

  async clickRemoveFromCartButton() {
    await this.removeFromCartButton.click();
  }

  async openItemDescriptionPageViaTextLink() {
    await this.itemDescriptionPageTextLink.click();
  }

  async openItemDescriptionPageViaImageLink() {
    await this.itemDescriptionPageImageLink.click();
  }

  async clickSortButton() {
    await this.sortButton.click();
  }

  async selectSortAToZ() {
    const sortDropDown = $("//select[@class='product_sort_container']");
    await sortDropDown.selectByVisibleText("Name (A to Z)");
  }

  async selectSortZToA() {
    const sortDropDown = $("//select[@class='product_sort_container']");
    await sortDropDown.selectByVisibleText("Name (Z to A)");
  }

  async selectSortLowToHighPrice() {
    const sortDropDown = $("//select[@class='product_sort_container']");
    await sortDropDown.selectByVisibleText("Price (low to high)");
  }

  async selectSortHighToLowPrice() {
    const sortDropDown = $("//select[@class='product_sort_container']");
    await sortDropDown.selectByVisibleText("Price (high to low)");
  }

  get cartButton() {
    return $("//div[@id='shopping_cart_container']");
  }

  get hamburgerMenuButton() {
    return $("//button[@id='react-burger-menu-btn']");
  }

  get addToCartButton() {
    return $("//button[@id='add-to-cart-sauce-labs-onesie']");
  }

  get removeFromCartButton() {
    return $("//button[@id='remove-sauce-labs-onesie']");
  }

  get itemDescriptionPageTextLink() {
    return $(
      "//*[@class='inventory_item_name' and normalize-space()='Sauce Labs Onesie']"
    );
  }

  get itemDescriptionPageImageLink() {
    return $(
      "//*[@class='inventory_item_name' and normalize-space()='Sauce Labs Onesie']"
    );
  }

  get sortButton() {
    return $("//select[@data-test='product_sort_container']");
  }

  get sortAToZ() {
    return $("//option[@value='az']");
  }

  get sortZToA() {
    return $("//option[@value='za']");
  }

  get sortLowToHighPrice() {
    return $("//option[@value='lohi']");
  }

  get sortHighToLowPrice() {
    return $("//option[@value='hilo']");
  }
}

export default new InventoryPage();
