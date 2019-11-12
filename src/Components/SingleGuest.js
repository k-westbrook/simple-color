import React from 'react';


export default class SingleGuest extends React.Component {


  render() {
    return (

      <div >
        <form>
          {this.props.attendee.guestEmail}

        </form>
      </div>


    )
  }
}
