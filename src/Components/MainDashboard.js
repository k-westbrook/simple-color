import React from 'react';
import { connect } from 'react-redux'

class MainDashboard extends React.Component {

  render() {
    console.log("COMPONENT")
    return (
      <div>
        <h4>Welcome to Color Simple Main Dash</h4>
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
