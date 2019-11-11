import React from 'react';
import { Link } from 'react-router-dom'
import { registerUserThunk } from '../Store/User';
import { connect } from 'react-redux';
import history from '../history'


class SingleEvent extends React.Component {



  render() {
    return (
      <div>
        <h3>Single Event Page</h3>
      </div>
    )
  }


}

const mapState = state => {
  return {
    user: state.user
  }
}
const mapDispatch = dispatch => {
  return {
    registerUser: (email, password) => {
      dispatch(registerUserThunk(email, password))
      history.push('/mydash');
    }
  }
}


export default connect(mapState, mapDispatch)(SingleEvent)
