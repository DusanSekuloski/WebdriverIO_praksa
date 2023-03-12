Feature: Saucedemo website test

  Scenario: Login funcionality

    Given User is on login page
    When User enter username and password
    Then User should be on the product page 