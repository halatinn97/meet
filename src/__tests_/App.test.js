import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import "../setupTests"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

describe('<App /> component', () => {
    configure({ adapter: new Adapter() })
    test('render list of events', () => {
        const AppWrapper = shallow(<App />);
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
});