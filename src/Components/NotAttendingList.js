import React from 'react';


export default class NotAttendingList extends React.Component {


  render() {
    return (
      <div>
        <h3>Who Can't Make It</h3>
        <ul>
          {this.props.attendees.map(attendee => {
            if (!attendee.status) {
              return (
                <div key={attendee.guestEmail}>
                  {attendee.guestEmail}
                </div>
              )
            } else {
              return (<div></div>)
            }
          }
          )

          }
        </ul>


      </div>
    )
  }
}
