import React from 'react';
import SingleGuest from './SingleGuest';

export default class NotAttendingList extends React.Component {

  constructor(props) {
    super(props);
    this.state =
      {
        attendees: props.attendees
      }
  }

  render() {
    return (
      <div>
        <h3>Who Can't Make It</h3>
        <ul>
          {this.state.attendees.map(attendee => {
            if (!attendee.status) {
              return (
                <div key={attendee.guestEmail}>
                  <SingleGuest attendee={attendee} attend={false} handleResponse={this.props.handleResponse} />
                </div>
              )
            } else {
              return (<div key={Math.random().toString()}></div>)
            }
          }
          )

          }
        </ul>


      </div>
    )
  }
}
