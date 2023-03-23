Feature: test checkout step one page functionalities

  Background: 
    Given the user is logged in on the Saucedemo website
    And the user clicks on the cart button
    And the user clicks on the checkout button

  @OpenSecondCheckoutPage
  Scenario: the user clicks on the continue button in order to go to the checkout step two page
    Given the user is on the checkout step one page
    When the user enters first name, last name and zip code
    And the user clicks on the continue button
    Then the user is on the checkout step two page
