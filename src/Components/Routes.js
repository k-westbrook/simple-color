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
  //need to update this
  componentDidMount() {
    let cookies = new Cookies();
    if (cookies.get('authentication') === 'true') {
      let email = cookies.get('email');
      let password = cookies.get('password');
      this.props.authenticate(email, password);
      this.setState({ registered: true })
    } else {
      this.setState({ registered: false })
    }
  }


  render() {

    return (
      <div>
        {
          <Switch>

            <Route path="/homepage" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />




            <Route path="/mydash" component={MainDashboard} xs />
            <Route component={HomePage} />


          </Switch>


        }
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
    authenticate: (email, password) => dispatch(loginUserThunk(email, password))
  }
}


export default connect(mapState, mapDispatch)(Routes)
