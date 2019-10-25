import React from 'react';
import { connect } from 'react-redux'

class MainDashboard extends React.Component {

  render() {
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
