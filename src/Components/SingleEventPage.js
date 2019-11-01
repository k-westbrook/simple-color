import React from 'react';
import { connect } from 'react-redux'
import { getSpecificEventThunk } from '../Store/Event';

class SingleEventPage extends React.Component {

  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {

    return (
      <div>
        {(this.state.loaded) ?
          <div>
            <h4>Event</h4>
          </div>
          :
          <div>
            <p>loading</p>
          </div>


        }
      </div>
    )
  }
}


const mapDispatch = dispatch => {
  return {
    getEvent: (event_id) => dispatch(getSpecificEventThunk())
  }
}
const mapState = state => {
  return {
    user: state.user,
    event: state.event
  }
}



export default connect(mapState, mapDispatch)(SingleEventPage)
