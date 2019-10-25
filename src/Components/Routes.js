import { Route, Switch } from 'react-router-dom'
import React from 'react';
import HomePage from './HomePage'
import LoginPage from './LogIn';
import RegisterPage from './Register';
import MainDashboard from './MainDashboard';
import { connect } from 'react-redux';
import { loginUserThunk } from '../Store/User';
import Cookies from 'universal-cookie'

class Routes extends React.Component {

  constructor() {
    super();
    this.state = {
      registered: false
    }
  }

  componentDidMount() {
    let cookies = new Cookies();
    if (cookies.get('authentication')) {

    }
  }
  render() {
    return (


      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/mydash" component={MainDashboard} />
        <Route component={HomePage} />
      </Switch>

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
    authenticate: (email, password) => dispatch(loginUserThunk(email, password))
  }
}


export default connect(mapState, mapDispatch)(Routes)
