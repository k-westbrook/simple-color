import React from 'react';
import { connect } from 'react-redux'

class MainDashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {

    return (
      <div>
        {(this.state.loaded) ?
          <div>
            <h4>Welcome to Simple Mystery Main Dash</h4>
          </div>
          :
          <div>
            <p>loading</p>
          </div>


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



export default connect(mapState)(MainDashboard)
