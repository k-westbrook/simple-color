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
            <label htmlFor="address">Address</label>
            <input type="text" name="address" />
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
