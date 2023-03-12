Feature: Saucedemo website test

  Scenario: Product sort container

    Given User is on login page
    When User enter username and password
    Then User should be on the product page 
    When User click on the option product sort container
    Then User should sort item according to price and alphabetical order
