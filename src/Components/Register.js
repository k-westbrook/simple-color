import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { registerUserThunk } from '../Store/User';
import { connect } from 'react-redux';



class RegisterPage extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {

    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    this.props.registerUser(email, password)

  }

  handleOnChange(event) {

    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })

  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="email">
            Email
      </label>
          <input name="email" type="text" value={this.state.email} onChange={this.handleOnChange} />
          <label htmlFor="password">

            Password
      </label>
          <input name="password" type="new-password" value={this.state.password} onChange={this.handleOnChange} />
          <button>Login</button>
        </form>

        <div>
          <Link to="/login" >Login </Link>
        </div>
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
    registerUser: (email, password) => dispatch(registerUserThunk(email, password))
  }
}


export default connect(mapState, mapDispatch)(RegisterPage)
