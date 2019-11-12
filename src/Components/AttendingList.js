import React from 'react';


export default class AttendingList extends React.Component {


  render() {
    return (
      <div>
        <h3>Who's Attending</h3>
        <ul>
          {this.props.attendees.map(attendee => {
            if (attendee.status) {
              return (
                <div key={attendee.guestEmail}>
                  {attendee.guestEmail}
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
