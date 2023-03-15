Feature: Saucedemo website logout funcionality

  Scenario: Check logout option

    Given User is on login page
    When User enters username and password
    Then Clicks login button
    Then User is logged in
    When User clicks burger menu
    When Clicks logout option
    Then User is logged out