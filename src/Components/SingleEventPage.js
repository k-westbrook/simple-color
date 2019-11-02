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
    let event_id = this.props.match.params.event_id;
    this.props.getEvent(event_id);

  }



  render() {

    return (
      <div>
        {(this.props.event.selectedEvent) ?
          <div>
            <h4>Eat at {this.props.event.selectedEvent.name}!</h4>
            <p>Location:{this.props.event.selectedEvent.address} <br />
              {this.props.event.selectedEvent.city}, {this.props.event.selectedEvent.state}
            </p>
            <p>
              When: {this.props.event.selectedEvent.date} <br />
              Time: {this.props.event.selectedEvent.time}
            </p>
            <div>
              <ul>
                {this.props.event.selectedEvent.attendees.map(attendee => {
                  return (
                    <div>
                      {attendee}
                    </div>
                  )
                }
                )

                }
              </ul>
            </div>
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
