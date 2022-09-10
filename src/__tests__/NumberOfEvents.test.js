import React from 'react';
import { shallow, configure } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mockData } from '../mock-data';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />)
    });

    configure({ adapter: new Adapter() })

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.inputEventNumber')).toHaveLength(1);
    });

    test('render 32 events by default', () => {
        expect(NumberOfEventsWrapper.find('.inputEventNumber').prop('value')).toBe(32);
    });

    test('render event number according to user input', () => {
        NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
        NumberOfEventsWrapper.find('.inputEventNumber').simulate("change", {
            target: { value: 15 }
        })
        expect(NumberOfEventsWrapper.find('.inputEventNumber').prop('value')).toBe(15);
    })

    test('change numberOfEvents state when number input changes', () => {
        NumberOfEventsWrapper.setState({ numberOfEvents: 15 });
        NumberOfEventsWrapper.find('.inputEventNumber').simulate('change', { target: { value: 4 } });
        expect(NumberOfEventsWrapper.state('numberOfEvents')).not.toEqual(undefined);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(4);
    });
});

