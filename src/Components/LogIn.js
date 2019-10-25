import React from 'react';
import { Link } from 'react-router-dom';
import { loginUserThunk } from '../Store/User';
import { connect } from 'react-redux';



class LoginPage extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      registered: null,
      attemped: false
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {

    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    this.props.loginUser(email, password)
    this.setState({ attemped: true });

  }

  handleOnChange(event) {

    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })

  }

  componentDidMount() {
    if (this.props.user) {
      if (this.props.user.registered) {
        this.setState({ registered: true });
      } else {
        this.setState({ registered: false });
      }

    }
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
          <Link to="/register" >Register</Link>
        </div>
        {(!this.state.registered && this.state.attemped) ?
          < div >
            <p>Email or password incorrect.</p>
          </div>
          :
          <div>
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
const mapDispatch = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUserThunk(email, password))
  }
}


export default connect(mapState, mapDispatch)(LoginPage)
