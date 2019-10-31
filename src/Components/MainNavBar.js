import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../Store/User';

class MainNavBar extends React.Component {

  render() {
    return (
      <div>
        {(!this.props.user.registered) ?
          <nav>
            <Link to="/homepage">Home</Link>
            <Link to="login">Login</Link>
          </nav>
          :
          <nav>
            <Link to="/mydash">My Dashboard</Link>
            <Link to="/addeat">Add Eat</Link>
            <Link to="/myeats">Eats List</Link>
            <Link to="/homepage" onClick={this.props.logout}>Logout</Link>
          </nav >
        }
      </div>
    )
  }
}
const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  }
}
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState, mapDispatch)(MainNavBar)


