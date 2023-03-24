Feature: Test Logout Functionality

  @Logout
  Scenario: log out from the website
    Given the user is logged in on the Saucedemo website
    When the user clicks on the hamburger menu button
    And the user clicks on the logout button
    Then the user is on the login page
