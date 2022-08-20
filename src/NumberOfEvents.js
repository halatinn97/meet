import React, { Component } from "react";


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value >= 0 && value <= 32) {
            this.setState({ numberOfEvents: value })
        } else {
            alert("Please select up to 32 events")
        }
    }

    render() {
        return (
            <div className="numberOfEvents">
                <input
                    type="text"
                    className="inputEventNumber"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />

            </div>
        );
    }
}
export default NumberOfEvents;