import React from 'react';
import { Link } from 'react-router-dom'


export default class RegisterPage extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }


  render() {
    return (
      <div>
        <form>
          <label for="user-email">
            Email
      </label>
          <input name="user-email" type="text" />
          <label for="password">

            Password
      </label>
          <input name="user-password" type="password" />
          <button>Login</button>
        </form>

        <div>
          <Link to="/login" >Login </Link>
        </div>
      </div>
    )
  }


}
