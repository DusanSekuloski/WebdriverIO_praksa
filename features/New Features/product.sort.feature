Feature: Saucedemo website product sort container

    Scenario: Check product sort container

        Given User is on login page
        When User enters username and password
        When Clicks login button
        Then User is logged in
        When User click on product sort container
        Then User can select list of product in sort container options
    