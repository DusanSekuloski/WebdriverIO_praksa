Feature: test inventory page functionalities

  @AddToCartButton @Smoke
  Scenario: click on add to cart button located on "Sauce Labs Onesie" item
    Given the user is on the inventory page
    When the user clicks on the add to cart button
    Then the "Sauce Labs Onesie" item should be added to the cart
