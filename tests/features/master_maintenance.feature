Feature: Master Maintenance

Background: 
    Given I have access to Shift Management
    When I perform Login
    Then the Home page should display
    When I navigate to Master Maintenance
    Then the Master Maintenance page should display

    Scenario: Create a new store
        When I click on Create New Store
        Then the Create Store form should display

    Scenario: Create a new employee
        When I click on Create New Employee
        Then the Create Employee form should display

    Scenario: Create a new company
        When I click on Create New Company
        Then the Create Company form should display

    Scenario: Create a new zone
        When I click on Create New Zone
        Then the Create Zone form should display

    Scenario: Create a new area
        When I click on Create New Area
        Then the Create Area form should display

    Scenario: Create a new authority
        When I click on Create New Authority
        Then the Create Authority form should display

    Scenario: Update basic ledger
        When I click on Basic Ledger
        Then the Basic Ledger page should display