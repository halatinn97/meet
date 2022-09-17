import React, { Component } from "react";
import moment from 'moment';
import GoogleCalendar from './img/google-calendar.png';
import Location from './img/location.png';
import Time from './img/time.png';



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
                        {!this.state.show ? (
                            <button className="show-details-btn" onClick={this.toggleDetails}>Details</button>
                        ) : (
                                <button className="hide-details-btn" onClick={this.toggleDetails}>Show less</button>
                            )}
                    </div>
                    <div className="start-date-time">
                        <img className="time-img" src={Time} alt="time-clipart" />
                        {moment(event.start.dateTime).format('DD/MM/YYYY, hh:mm')}
                        {event.start.timeZone}
                    </div>
                    <div className="location">
                        <img className="location-img" src={Location} alt="location-clipart" />
                        {event.location}
                    </div>
                    {/* <div className="group">
                        {event.organizer.email}
                    </div> */}
                    {this.state.show && (
                        <>
                            <div className="calendar">
                                <a href={event.htmlLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="event-htmlLink">
                                    <img className="google-calendar-link" src={GoogleCalendar} alt="google-calendar" />
                                </a>
                                Add to Google Calendar:
                            </div>
                            <div className="about-event">
                                <h4 className="about-heading">About the event:</h4>
                                <div className="description">{event.description}</div>
                            </div>
                        </>
                    )}


                </div>
            </>
        );
    }
}
export default Event;