Feature: Saucedemo website login funcionality

  Scenario: Check login with valid credentials

    Given User is on login page
    When User enters username and password
    And Clicks login button
    Then User is logged in