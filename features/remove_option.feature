Feature: Saucedemo website test

  Scenario: Remove item option

    Given User is on login page
    When User enter username and password
    Then User should be on the product page 
    When User order product
    When User open 'Cart' 
    When User click option 'Remove'
    Then Item is removed from 'Cart' 