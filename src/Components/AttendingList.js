import React from 'react';
import SingleGuest from './SingleGuest';


export default class AttendingList extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        attendees: props.attendees
      }
  }

  render() {
    console.log(this.props.attendees)
    return (
      <div>
        <h3>Who's Attending</h3>
        <ul>
          {this.state.attendees.map(attendee => {
            if (attendee.status) {
              return (
                <div key={attendee.guestEmail}>
                  <SingleGuest attendee={attendee} attend={true} handleResponse={this.props.handleResponse} />
                </div>
              )
            } else {
              return (<div key={Math.random().toString()} ></div>)
            }
          }
          )

          }
        </ul>


      </div>
    )
  }
}
