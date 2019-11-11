import React from 'react';


export default class AddGuest extends React.Component {


  render() {

    return (
      <div>

        <form onSubmit={this.props.handleGuestAdd}>
          <label htmlFor='guestEmail'>Guest Email</label>
          <input name='guestEmail' type='text' />
          <button>Add Guest</button>
        </form>
      </div>
    )
  }
}
