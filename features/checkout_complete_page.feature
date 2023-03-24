Feature: test checkout complete page functionalities

  Background: 
    Given the user is logged in on the Saucedemo website

  @BackHomeButton
  Scenario: the user clicks on the back home button and is taken to the inventory page
    Given the user is on the inventory page
    When the user clicks on the add to cart button
    And the user clicks on the cart button
    And the user clicks on the checkout button
    And the user enters first name, last name and zip code
    And the user clicks on the continue button
    And the user clicks on the finish button
    And the user clicks on the back home button
    Then the user is on the inventory page
