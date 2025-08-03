Feature: Login


    Scenario: Login Shift Management
        Given I have access to Shift Management
        When I perform Login
        Then the Home page should display