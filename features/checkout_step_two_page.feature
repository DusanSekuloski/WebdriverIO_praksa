Feature: test checkout step two page functionalities

  Background: 
    Given the user is logged in on the Saucedemo website
    And the user clicks on the add to cart button
    And the user clicks on the cart button
    And the user clicks on the checkout button
    And the user enters first name, last name and zip code
    And the user clicks on the continue button

  @OpenCheckoutCompletePage
  Scenario: the user clicks on the finish button in order to go to the checkout complete page
    Given the user is on the checkout step two page
    When the user clicks on the finish button
    Then the user is on the checkout complete page
