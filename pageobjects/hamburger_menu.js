class HamburgerMenu {
  async clickHamburgerMenuButton() {
    await this.hamburgerMenuButton.click();
  }

  async clickHamburgerMenuCloseButton() {
    await this.hamburgerMenuCloseButton.click();
  }

  async clickAllItemsDisplayButton() {
    await this.allItemsDisplayButton.click();
  }

  async clickAboutButton() {
    await this.aboutButton.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  async clickResetAppStateButton() {
    await this.resetAppStateButton.click();
  }

  get hamburgerMenuButton() {
    return $("//button[@id='react-burger-menu-btn']");
  }

  get hamburgerMenuCloseButton() {
    return $("//button[@id='react-burger-cross-btn']");
  }

  get allItemsDisplayButton() {
    return $("//a[@id='inventory_sidebar_link']");
  }

  get aboutButton() {
    return $("//a[@id='about_sidebar_link']");
  }

  get logoutButton() {
    return $("//a[@id='logout_sidebar_link']");
  }

  get resetAppStateButton() {
    return $("//a[@id='reset_sidebar_link']");
  }
}

export default new HamburgerMenu();
