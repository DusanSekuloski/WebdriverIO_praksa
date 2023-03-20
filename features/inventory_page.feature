Feature: test inventory page functionalities

Background: the user is logged in
Given the user is on the login page
    When the user enters valid username and password
    And clicks on the login button
    Then the user is logged in


  @AddToCartButton @Smoke
  Scenario: click on add to cart button located on "Sauce Labs Onesie" item
    Given the user is on the inventory page
    When the user clicks on the add to cart button
    Then the item should be added to the cart
