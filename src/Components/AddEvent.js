import React from 'react';
import axios from 'axios'
import SearchResults from './SearchResults';


export default class AddEvent extends React.Component {

  constructor() {
    super();
    this.state =
      {
        searchResults: []
      }
    this.getYelpSearchResults = this.getYelpSearchResults.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async getYelpSearchResults(search) {
    let results = await axios.post("https://b36yrfjg83.execute-api.us-west-1.amazonaws.com/Prod", { search: search });
    this.setState({ searchResults: results.data.body.eventSearchResults })

  }

  handleSubmit(evt) {
    evt.preventDefault();
    let searchItem = evt.target.search.value;
    this.getYelpSearchResults(searchItem);
  }


  render() {
    console.log(this.state)
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
      </div>
    )
  }
}
