import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class RegisterPage extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  async getInfo() {

    let data = await axios.post("https://pgqrxh9ys4.execute-api.us-west-1.amazonaws.com/Prod/",
      {
        email: "y",
        password: "hi"
      });
    console.log(data);
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
