Feature: Test Login Functionality

  @ValidLogin 
  Scenario: check login with valid credentials
    Given the user is on the login page
    When the user enters valid username and password
    And clicks on the login button
    Then the user is logged in

  @InvalidCredentialsLogin
  Scenario: check login with invalid credentials
    Given the user is on the login page
    When the user enters invalid username and password
    And clicks on the login button
    Then The user remains on the login page
