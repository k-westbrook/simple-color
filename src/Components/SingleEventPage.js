import React from 'react';
import { connect } from 'react-redux'
import { getSpecificEventThunk, addGuestThunk } from '../Store/Event';
import AddGuest from './AddGuest';

class SingleEventPage extends React.Component {

  constructor() {
    super();
    this.state = {
      loaded: false,
      attendeeList: []
    }

    this.handleGuestAdd = this.handleGuestAdd.bind(this);



  }
  componentDidMount() {
    let event_id = this.props.match.params.event_id;
    this.props.getEvent(event_id);

  }




  handleGuestAdd(evt) {
    evt.preventDefault();
    let guestObject = { guestEmail: evt.target.guestEmail.value, state: true };
    let attendeeList = this.props.event.selectedEvent.attendees;
    let addedList = [...attendeeList, guestObject];
    this.setState({ attendeeList: addedList });

    this.props.addGuest(this.props.event.selectedEvent.event_id, addedList)
  }




  render() {


    return (
      <div>
        {(this.props.event.selectedEvent) ?
          <div>
            <h3>Eat at {this.props.event.selectedEvent.name} with {this.props.event.selectedEvent.adminEmail}!</h3>
            <p>
              {this.props.event.selectedEvent.comments}
            </p>
            <p>Location:{this.props.event.selectedEvent.address} <br />
              {this.props.event.selectedEvent.city}, {this.props.event.selectedEvent.state}
            </p>
            <p>
              When: {this.props.event.selectedEvent.date} <br />
              Time: {this.props.event.selectedEvent.time}
            </p>
            <div>
              <h3>Who's Attending</h3>
              <ul>
                {this.state.attendeeList.map(attendee => {
                  return (
                    <div key={attendee}>
                      {attendee}
                    </div>
                  )
                }
                )

                }
              </ul>
            </div>
            <div>
              <AddGuest handleGuestAdd={this.handleGuestAdd} />
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
    getEvent: (event_id) => dispatch(getSpecificEventThunk(event_id)),
    addGuest: (event_id, attendees) => dispatch(addGuestThunk(event_id, attendees))
  }
}
const mapState = state => {
  return {
    user: state.user,
    event: state.event
  }
}



export default connect(mapState, mapDispatch)(SingleEventPage)
