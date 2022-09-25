import React, { Component } from 'react';
import './style.production.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: 'all',
    offlineText: '',
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if (true) { // Comment in to test app via Localhost without WelcomeScreen
      // if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        };
      });
    }

    if (!navigator.onLine) {
      this.setState({
        offlineText: "No network connection, data may not be up to date.",
      });
    } else {
      this.setState({
        offlineText: '',
      });
    }
  }


  componentWillUnmount() {
    this.mounted = false;
  }


  updateEvents = (location, maxNumEvents) => {
    if (maxNumEvents === undefined) {
      maxNumEvents = this.state.numberOfEvents;
    } else (
      this.setState({ numberOfEvents: maxNumEvents })
    )
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, maxNumEvents),
        numberOfEvents: maxNumEvents,
        locationSelected: location
      });
    });
  }
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <div className="offline-warning-div">
          <OfflineAlert text={this.state.offlineText} />
        </div>
        <div className="header">
          <h1 className="appTitle">MEET</h1>
          <h2 className="slogan"> - The app that connects you to your favorite events anywhere, anytime -</h2>
        </div>
        <CitySearch
          locations={locations}
          updateEvents={this.updateEvents} />
        <div className="data-vis-wrapper" >
          <h4 className="chart-heading">Visualise events in each city</h4>
          <EventGenre events={events} />
          <br>
          </br>
          <br>
          </br>
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis
                type="category"
                dataKey="city"
                name="city"
                stroke="white"
              />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
                stroke="white"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList
          events={this.state.events} />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents} />
        {/* <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} /> */}
      </div>
    );
  }
}
export default App;