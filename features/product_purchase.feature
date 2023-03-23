Feature: test product purchase functionality

  Background: 
    Given the user is logged in on the Saucedemo website

  @BuyProduct
  Scenario: the user buys a product
    Given the user is on the inventory page
    When the user clicks on the add to cart button
    And the user clicks on the cart button
    And the user clicks on the checkout button
    And the user enters first name, last name and zip code
    And the user clicks on the continue button
    And the user clicks on the finish button
    Then the user bought a product
