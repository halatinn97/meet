import React from 'react';
import { shallow, configure } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mockData } from '../mock-data';


describe('<EventList /> component', () => {
    configure({ adapter: new Adapter() })
    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });
});