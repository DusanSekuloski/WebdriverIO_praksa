Feature: Saucedemo website Calculator funcionality

    Scenario: Check calculator accuracy

        Given User is on login page
        When User enters username and password
        When Clicks login button
        Then User is logged in
        When User order products
        When User clicks on 'cart' icon
        When User clicks on 'checkout' button
        When User fill data user fields
        When User clicks on 'continue' button
        Then Calculator accuray should be correct
