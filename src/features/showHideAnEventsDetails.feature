Feature: Show / Hide event details

    Scenario: An event element is collapsed by default.
        Given the main page is opened
        When user opens the app and sees main event overview
        Then the user should not see the event details

    Scenario: User can expand an event to see its details.
        Given the full event in the app has loaded
        When the user clicks on the event details button
        Then the user should see the event details

    Scenario: User can collapse an event to hide its details.
        Given the user collapses an event
        When the user clicks on a minimise button
        Then the user should be able to hide the event details
