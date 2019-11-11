import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class EventsContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>My eats</h2>
        <h4>I'm hosting</h4>

        <h4>I'm invited</h4>

      </div>
    )
  }
}


const mapState = state => {
  return {
    user: state.user,
    event: state.event
  }
}



export default connect(mapState)(EventsContainer)
