import React from 'react';
import { connect } from 'react-redux'

class NewEventForm extends React.Component {

  constructor() {
    super();

  }


  render() {

    return (
      <div>
        <div>
          <h3>Create Event</h3>
          <form>
            <label htmlFor="name">Restaurant Name</label>
            <input type="text" name="name" />
            <label htmlFor="date">Date</label>
            <input type="date" name="date" />
            <label htmlFor="time">Time</label>
            <input type="time" name="time" />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" />
            <label htmlFor="city">City</label>
            <input type="text" name="city" />
            <label htmlFor="state">State</label>
            <input type="text" name="state" />
            <button>Create Event</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}



export default connect(mapState)(NewEventForm)
