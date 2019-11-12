import React from 'react';
import { connect } from 'react-redux'
import { getSpecificEventThunk, addGuestThunk } from '../Store/Event';
import AddGuest from './AddGuest';
import AttendingList from './AttendingList';
import NotAttendingList from './NotAttendingList';

class SingleEventPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      attendeeList: []
    }

    this.handleGuestAdd = this.handleGuestAdd.bind(this);
  }

  componentDidMount() {
    let event_id = this.props.match.params.event_id;
    this.props.getEvent(event_id);
    this.setState({ loaded: true })

  }

  handleGuestAdd(evt) {
    evt.preventDefault();
    let guestObject = { guestEmail: evt.target.guestEmail.value, state: true };
    let attendeeList = this.props.event.selectedEvent.attendees;
    let addedList = [...attendeeList, guestObject];
    this.props.addGuest(this.props.event.selectedEvent.event_id, addedList)
  }

  render() {


    return (
      <div>
        {(this.props.event.selectedEvent && this.state.loaded) ?
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
              <AttendingList attendees={this.props.event.selectedEvent.attendees} />
            </div>
            <div>
              <NotAttendingList attendees={this.props.event.selectedEvent.attendees} />
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
