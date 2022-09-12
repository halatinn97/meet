import React from 'react';
import { shallow, configure } from 'enzyme';
import Event from '../Event';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />)
    });

    configure({ adapter: new Adapter() })

    test('render name of event', () => {
        expect(EventWrapper.find('.name')).toHaveLength(1);
    });

    test('render start date & time', () => {
        expect(EventWrapper.find('.start-date-time')).toHaveLength(1);
    });

    test('render location of event', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('render group of event', () => {
        expect(EventWrapper.find('.group')).toHaveLength(1);
    });

    test('render details button', () => {
        expect(EventWrapper.find('.show-details-btn')).toHaveLength(1);
    });


    test('show details when button clicked', () => {
        EventWrapper.setState({
            show: true
        });
        EventWrapper.find('.show-details-btn').simulate('click');
        expect(EventWrapper.state('show')).toBe(false);
    });

    test('hide details when button clicked', () => {
        EventWrapper.setState({
            show: false
        });
        EventWrapper.find('.hide-details-btn').simulate('click');
        expect(EventWrapper.state('show')).toBe(true);
    });
});