Feature: Saucedemo website test

    Scenario: Order Sauce Labs Backpack product

        Given User is on login page
        When User enter username and password
        Then User should be on the product page
        Then User click button 'Add to cart'
        Then User click on the 'Cart' icon
        Then User click on the 'Checkout' button
        Then User fill fields with user data
        When User click 'Finish' button
        Then The Product is ordered