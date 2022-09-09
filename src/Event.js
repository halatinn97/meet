import React, { Component } from "react";



class Event extends Component {
    state = {
        show: true,
    }

    showDetails = () => {
        this.state.show
            ? this.setState({ show: false })
            : this.setState({ show: true });
    };


    render() {
        const { event } = this.props;
        return (
            <div className="Event">
                <div className="name">
                    {event.summary}
                </div>
                <div className="start-date-time">
                    {event.start.dateTime}
                </div>
                <div className="group">
                    {event.organizer.email}
                </div>
                <div className="going">
                    {/*event.attendees[].responseStatus.accepted*/}
                </div>
                <button className="details"
                    onClick={this.showDetails}>Details
                </button>
            </div>
        );
    }
}
export default Event;