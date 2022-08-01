## meet

Description: a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.
The application uses the Google Calendar API to fetch upcoming events.

## Key features:

#### Feature 1: Filter events by city
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Scenario 2: User should see a list of suggestions when they search for a city.
Scenario 3: User can select a city from the suggested list.

As a user
I should be able to "filter events by city"
So that I can see the list of events that take place in that city

#### Feature 2: Show/hide event details
Scenario 1: An event element is collapsed by default.
Scenario 2: User can expand an event to see its details.
Scenario 3: User can collapse an event to hide its details.

As a user 
I should be able to “shows/hide event’s details”
So that I can find out more information about the event or hide event information if not needed

#### Feature 3: Specify number of events
Scenario 1: When user hasn’t specified a number, 32 is the default number.
Scenario 2: User can change the number of events they want to see.

As a user 
I should be able to “specify number of events”
So that I can control the amount of events shown to my current needs and keep a clear overview

#### Feature 4: Use the app when offline
Scenario 1: Show cached data when there’s no internet connection.
Scenario 2: Show error when user changes the settings (city, time range).

As a user
I should be able to “use the app when offline”
So that I can still make use of the app when I do not have an internet connection

### Feature 5: Data visualisation
Scenario 1: Show a chart with the number of upcoming events in each city.

As a user 
I should be able to “visualise data”
So that I can have a visual overview of upcoming events in different cities
