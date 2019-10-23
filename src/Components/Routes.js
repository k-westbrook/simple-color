import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import HomePage from './HomePage'
import LoginPage from './LogIn';


export default class Routes extends React.Component {
  render() {
    return (


      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route component={HomePage} />
      </Switch>

    )

  }
}
