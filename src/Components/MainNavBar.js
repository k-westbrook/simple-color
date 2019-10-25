import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../Store/User';

const MainNavBar = () => {

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="login">Login</Link>
      <Link to="/home">Logout</Link>
    </nav>

  )
}
const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  }
}


export default connect(null, mapDispatch)(MainNavBar)


