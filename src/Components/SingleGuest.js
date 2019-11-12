import React from 'react';


export default class SingleGuest extends React.Component {


  render() {
    return (

      <div >

        <p>
          {this.props.attendee.guestEmail}
        </p>
        {(this.props.attend) ?
          <button onClick={this.props.handleResponse} value={this.props.attendee.guestEmail}>Not Coming</button>
          :
          <button onClick={this.props.handleResponse} value={this.props.attendee.guestEmail}> Coming</button>}

      </div>


    )
  }
}
