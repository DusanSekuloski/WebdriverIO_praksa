Feature: Test Hamburger Menu functionality

  @OpenHamburgerMenu
  Scenario: open the hamburger menu
    Given the user is logged in on the Saucedemo website
    When the user clicks on the hamburger menu button
    Then the hamburger menu opens
