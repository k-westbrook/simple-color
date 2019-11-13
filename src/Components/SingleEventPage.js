import React from 'react';
import { connect } from 'react-redux'
import { getSpecificEventThunk, addGuestThunk, updateGuestThunk } from '../Store/Event';
import AddGuest from './AddGuest';
import AttendingList from './AttendingList';
import NotAttendingList from './NotAttendingList';


class SingleEventPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }

    this.handleGuestAdd = this.handleGuestAdd.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  componentDidMount() {
    let event_id = this.props.match.params.event_id;
    this.props.getEvent(event_id);
    this.setState({ loaded: true })

  }


  handleGuestAdd(evt) {
    evt.preventDefault();
    let guestObject = { guestEmail: evt.target.guestEmail.value, status: true };
    let attendeeList = this.props.event.selectedEvent.attendees;
    let addedList = [...attendeeList, guestObject];
    this.props.addGuest(this.props.event.selectedEvent.event_id, addedList, guestObject)
    evt.target.guestEmail.value = "";
  }

  handleResponse(evt) {

    let guestEmail = evt.target.value;
    let changedGuest, guestToChangeStatus, guestToChange;
    let copyAttendees = [...this.props.event.selectedEvent.attendees];
    for (let i = 0; i < copyAttendees.length; i++) {
      if (copyAttendees[i].guestEmail === guestEmail) {
        guestToChange = copyAttendees.splice(i, 1);
      }
    }

    if (guestToChange[0].status === true) {

      guestToChangeStatus = false;
    } else {
      guestToChangeStatus = true;
    }
    changedGuest = { guestEmail, status: guestToChangeStatus };
    copyAttendees.push(changedGuest)

    this.props.updateGuest(this.props.event.selectedEvent.event_id, copyAttendees, changedGuest)
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
              <AttendingList attendees={this.props.event.selectedEvent.attendees} handleResponse={this.handleResponse} />
            </div>
            <div>
              <NotAttendingList attendees={this.props.event.selectedEvent.attendees} handleResponse={this.handleResponse} />
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
    addGuest: (event_id, attendees, guestObject) => dispatch(addGuestThunk(event_id, attendees, guestObject)),
    updateGuest: (event_id, attendees, guestObject) => dispatch(updateGuestThunk(event_id, attendees, guestObject))
  }
}
const mapState = state => {
  return {
    user: state.user,
    event: state.event
  }
}



export default connect(mapState, mapDispatch)(SingleEventPage)
