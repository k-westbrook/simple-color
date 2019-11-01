import React from 'react';
import { connect } from 'react-redux'
import { getSpecificEventThunk } from '../Store/Event';

class SingleEventPage extends React.Component {

  constructor() {
    super();
    this.state = {
      loaded: false
    }
    this.handleEventInfoLoad = this.handleEventInfoLoad.bind(this);
  }
  componentDidMount() {
    this.handleEventInfoLoad();
    this.setState({ loaded: true })
  }

  handleEventInfoLoad() {
    let event_id = this.props.match.params.event_id;
    console.log(event_id)
    this.props.getEvent(event_id);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {(this.state.loaded) ?
          <div>
            <h4>Eat at</h4>
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
    getEvent: (event_id) => dispatch(getSpecificEventThunk(event_id))
  }
}
const mapState = state => {
  return {
    user: state.user,
    event: state.event
  }
}



export default connect(mapState, mapDispatch)(SingleEventPage)
