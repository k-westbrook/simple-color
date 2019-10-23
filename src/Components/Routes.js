import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import HomePage from './HomePage'


export default class Routes extends React.Component {
  render() {
    return (


      <Switch>
        <Route path="/" component={HomePage} />
        <Route component={HomePage} />
      </Switch>

    )

  }
}
