Feature: Saucedemo website login funcionality

    Scenario: Check login with invalid username

        Given User is on login page
        When User enters invalid username and valid password
        When Clicks login button
        Then User is not logged in