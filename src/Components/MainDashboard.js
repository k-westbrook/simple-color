import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie'

class MainDashboard extends React.Component {


  render() {
    let cookies = new Cookies();
    console.log(cookies.get('authentication'))

    return (
      <div>
        <h4>Welcome to Color Simple</h4>


      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}



export default connect(mapState)(MainDashboard)
