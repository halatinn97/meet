import React, { Component } from "react";
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: '',
    }

    handleInputChanged = (event) => {
        let value = parseInt(event.target.value)
        if (value > 0 && value <= 32) {
            this.setState({
                numberOfEvents: value,
                infoText: ''
            });
        } else {
            this.setState({
                numberOfEvents: 32, infoText: 'Please select a number between 1-32'
            });
        }
        this.props.updateEvents(undefined, value);
    };

    render() {
        return (
            <div className="numberOfEvents">
                <h5>Select number of events</h5>
                <input
                    type="text"
                    className="inputEventNumber"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    }
}
export default NumberOfEvents;