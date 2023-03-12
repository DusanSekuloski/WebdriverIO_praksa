Feature: Saucedemo website test

  Scenario: Login faild , locked user

    Given User is on login page
    When User enter username and password
    Then User is locked