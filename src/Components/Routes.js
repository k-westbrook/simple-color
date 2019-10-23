import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import HomePage from './HomePage'
import LoginPage from './LogIn';
import RegisterPage from './Register';


export default class Routes extends React.Component {
  render() {
    return (


      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={HomePage} />
      </Switch>

    )

  }
}
