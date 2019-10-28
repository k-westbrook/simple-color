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
    if (cookies.get('authentication') === 'true') {
      let email = cookies.get('email');
      let password = cookies.get('password');
      this.props.authenticate(email, password);
      this.setState({ registered: true })

    }
  }
  render() {
    console.log(this.state.registered)
    return (


      <Switch>
        {(this.state.registered) ?
          <Switch>
            <Route path="/mydash" component={MainDashboard} />
            <Route component={MainDashboard} />
          </Switch>
          :
          <Switch>
            <Route path="/homepage" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route component={HomePage} />
          </Switch>
        }
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
