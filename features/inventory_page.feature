Feature: test inventory page functionalities

  Background: 
    Given the user is logged in on the Saucedemo website
    And the user is on the inventory page

  @AddItemToCart
  Scenario: click on add to cart button located on "Sauce Labs Onesie" item
    When the user clicks on the add to cart button
    Then the item should be added to the cart

  @SortReverseAlphabeticalOrder
  Scenario: sort products in reverse alphabetical order
    When the user clicks on sort menu and selects name z to a
    Then the products should be displayed in reverse alphabetical order

  @OpenCartPage
  Scenario: open the cart page
    When the user clicks on the cart button
    Then the user is on the cart page
