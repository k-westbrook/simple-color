import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../Store/User';

class MainNavBar extends React.Component {

  render() {
    return (
      <nav>
        <Link to="/home">Home</Link>
        <Link to="login">Login</Link>
        <Link to="/homepage" onClick={this.props.logout}>Logout</Link>
      </nav >

    )
  }
}
const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  }
}


export default connect(null, mapDispatch)(MainNavBar)


