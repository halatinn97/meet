Feature: Specify number of events

    Scenario: When user hasn’t specified a number, 32 is the default number.

        Given the user has not specified a number
        When the user opens the app
        Then the user sees 32 events by default

    Scenario: User can change the number of events they want to see.

        Given the main page is open & no changes have been made in the event number input field
        When the user inputs a number in the event number input field
        Then the user can see the new number of events specified
