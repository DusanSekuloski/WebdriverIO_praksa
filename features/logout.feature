Feature: Saucedemo website test

  Scenario: Logout funcionality

    Given User is login page
    When User enter username and password
    Then User should be on the product page
    When User click menu option
    When Click Logout option
    Then User Logout from product page