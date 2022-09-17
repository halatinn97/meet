import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import Search from './img/search.png';


class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'We cannot find the city you are looking for. Please try another city',
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        };
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false,
            suggestions: [],
            infoText: ''
        });
        this.props.updateEvents(suggestion);
    }

    render() {
        return (
            <>
                <div className="CitySearch">
                    <div className="search-div">
                        <img className="search-img" src={Search} alt="search-magnifier" />
                        <input
                            className="search-input"
                            placeholder="Search cities"
                            value={this.state.query}
                            onChange={this.handleInputChanged}
                            onFocus={() => { this.setState({ showSuggestions: true }) }}
                        />
                    </div>
                    <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: "none" }}>
                        {this.state.suggestions.map((suggestion) => (
                            <li className="single-suggestion" key={suggestion}
                                onClick={() => this.handleItemClicked(suggestion)}
                            >{suggestion}</li>
                        ))}
                        <li className="all-cities" onClick={() => this.handleItemClicked("all")}>
                            <b>See all cities</b>
                        </li>
                    </ul>
                    <div className="city-warning-div">
                        <InfoAlert className="city-warning" text={this.state.infoText} />
                    </div>
                </div>
            </>
        );
    }
}

export default CitySearch;