import React, { Component } from "react";
import moment from 'moment';


class Event extends Component {
    state = {
        show: false,
    };

    toggleDetails = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        const { event } = this.props;
        return (
            <>
                <div className="event">
                    <div className="name">
                        {event.summary}
                    </div>
                    <div className="start-date-time">
                        {moment(event.start.dateTime).format('DD/MM/YYYY, hh:mm')}
                        {event.start.timeZone}
                    </div>
                    <div className="location">
                        {event.location}
                    </div>
                    <div className="group">
                        {event.organizer.email}
                    </div>
                    {this.state.show && (
                        <>
                            <div className="about-event">About event:</div>
                            <a href={event.htmlLink}
                                target="_blank"
                                rel="noreferrer"
                                className="event-htmlLink">
                                See details on Google Calendar
                            </a>
                            <div className="description">{event.description}</div>
                        </>
                    )}

                    {!this.state.show ? (
                        <button className="show-details-btn" onClick={this.toggleDetails}>Show Details</button>
                    ) : (
                            <button className="hide-details-btn" onClick={this.toggleDetails}>Hide Details</button>
                        )}
                </div>
            </>
        );
    }
}
export default Event;