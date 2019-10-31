import React from 'react';
import axios from 'axios'


export default class AddEvent extends React.Component {
  async test() {
    let results = await axios.post("https://b36yrfjg83.execute-api.us-west-1.amazonaws.com/Prod", { event: "steak" });

    console.log(results);

  }

  render() {

    return (
      <div>
        <h4>Add Event</h4>


      </div>
    )
  }
}
