Feature: Saucedemo website Order funcionality

    Scenario: Order product from the list

        Given User is on login page
        When User enters username and password
        When Clicks login button
        Then User is logged in
        When User order product
        Then User clicks on 'cart' icon
        Then User clicks on 'checkout' button
        Then User fill data user fields
        Then User clicks on 'continue' button
        When User clicks on 'finish' button
        Then User ordered the product