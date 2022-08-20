import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import Event from '../Event';
import "../setupTests";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    configure({ adapter: new Adapter() })
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });

    test('render Event', () => {
        expect(AppWrapper.find(Event)).toHaveLength(1);
    });
});