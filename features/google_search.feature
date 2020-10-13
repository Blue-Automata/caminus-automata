
Feature: Google Search

    Perform a google search and validate results

    Scenario: Do Search
        Given google is opened
        And search parameters are submitted
        When the Google Search is commenced
        Then the results will match parameters
