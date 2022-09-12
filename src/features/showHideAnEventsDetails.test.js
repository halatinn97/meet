import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the main page is opened', () => {

        });

        let AppWrapper;

        when('user opens the app and sees main event overview', () => {
            AppWrapper = mount(<App />);

        });

        then('the user should not see the event details', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let EventWrapper;

        given('the full event in the app has loaded', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            expect(EventWrapper.state('show')).toBe(false);
            expect(EventWrapper.find('.event .show-details-btn')).toHaveLength(1);
            expect(EventWrapper.find('.event .description')).toHaveLength(0);
        });
        when('the user clicks on the event details button', () => {
            EventWrapper.find('.show-details-btn').simulate('click');
        });

        then('the user should see the event details', () => {
            expect(EventWrapper.state('show')).toBe(true);
            expect(EventWrapper.find('.event .hide-details-btn')).toHaveLength(1);
            expect(EventWrapper.find('.event .description')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let EventWrapper;

        given('the user collapses an event', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            EventWrapper.setState({ show: true });
            expect(EventWrapper.state('show')).toBe(true);
            expect(EventWrapper.find('.event .hide-details-btn')).toHaveLength(1);
            expect(EventWrapper.find('.event .description')).toHaveLength(1);
        });

        when('the user clicks on a minimise button', () => {

            EventWrapper.find('.hide-details-btn').simulate('click');
        });
        then('the user should be able to hide the event details', () => {
            expect(EventWrapper.state('show')).toBe(false);
            expect(EventWrapper.find('.event .show-details-btn')).toHaveLength(1);
            expect(EventWrapper.find('.event .description')).toHaveLength(0);
        });
    });
});