import React from 'react';
import axios from 'axios'
import SearchResults from './SearchResults';
import NewEventForm from './NewEventForm';
import { connect } from 'react-redux'


class AddEvent extends React.Component {

  constructor() {
    super();
    this.state =
      {
        searchResults: []
      }
    this.getYelpSearchResults = this.getYelpSearchResults.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  }
  async getYelpSearchResults(search) {
    let results = await axios.post("https://b36yrfjg83.execute-api.us-west-1.amazonaws.com/Prod", { search: search });
    this.setState({ searchResults: results.data.body.eventSearchResults })

  }

  handleEventSubmit(evt) {
    evt.preventDefault();
    let name = evt.target.name.value;
    let date = evt.target.date.value;
    let time = evt.target.time.value;
    let address = evt.target.address.value;
    let city = evt.target.city.value;
    let state = evt.target.state.value;
    let comments = evt.target.comments.value;
    let email = this.props.user.email;
    let adminID = this.props.user_id;
    console.log(name, date, time, address, city, state, comments, email, adminID)
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let searchItem = evt.target.search.value;
    this.getYelpSearchResults(searchItem);
  }


  render() {

    return (
      <div>
        <h2>Add Event</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search"></label>
            <input name="search" type="text" />
            <button>Search</button>
          </form>
        </div>
        <div>
          <h3>Results</h3>
          <SearchResults results={this.state.searchResults} />
        </div>
        <NewEventForm handleEventSubmit={this.handleEventSubmit} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(AddEvent)
