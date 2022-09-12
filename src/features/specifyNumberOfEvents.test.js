import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('the user has not specified a number', () => {

        });

        let AppWrapper;

        when('the user opens the app', () => {
            AppWrapper = mount(<App />);

        });

        then('the user sees 32 events by default', () => {
            AppWrapper.update();
            expect(AppWrapper.state('numberOfEvents')).toBe(32);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;

        given('the main page is open & no changes have been made in the event number input field', () => {
            AppWrapper = mount(<App />);

        });

        when('the user inputs a number in the event number input field', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventObject = { target: { value: 15 } };
            NumberOfEventsWrapper.find('.inputEventNumber').simulate('change', eventObject)
        });

        then('the user can see the new number of events specified', () => {
            expect(AppWrapper.state('numberOfEvents')).toBe(15);

        });
    });
});