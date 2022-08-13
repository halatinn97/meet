import React from 'react';
import { shallow, configure } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

describe('<EventList/> component', () => {
    configure({ adapter: new Adapter() })
    test('render correct number of events', () => {
        const EventListWrapper = shallow(
            <EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
        );
        expect(EventListWrapper.find(EventList)).toHaveLength(Event.length);
    });
});