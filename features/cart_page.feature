Feature: test cart page functionalities

  Background: 
    Given the user is logged in on the Saucedemo website
    And the user opens the cart page

  @OpenCheckoutStepOnePage
  Scenario: go to the checkout page
    When the user clicks on the checkout button
    Then the user is on the checkout step one page
