Feature: test checkout step one page functionalities

  Background: 
    Given the user is logged in on the Saucedemo website
    And the user clicks on the cart button
    And the user clicks on the checkout button

  @OpenSecondCheckoutPage
  Scenario: check if the user goes to the checkout step two page when all the checkout information input fields are filled out
    Given the user is on the checkout step one page
    When the user enters first name, last name and zip code
    And the user clicks on the continue button
    Then the user is on the checkout step two page

  @RemainOnFirstCheckoutPage
  Scenario: check if the user goes to the checkout step two page when none of the checkout information input fields are filled out
    Given the user is on the checkout step one page
    When the user clicks on the continue button
    Then the user remains on the checkout step one page
