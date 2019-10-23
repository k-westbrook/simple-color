import React from 'react';



export default class LoginPage extends React.Component {

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
          <input type="text" />
        </form>
      </div>
    )
  }


}
