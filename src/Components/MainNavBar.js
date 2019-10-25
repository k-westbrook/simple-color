import React from 'react'
import { Link } from 'react-router-dom'

const MainNavBar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="login">Login</Link>
    </nav>

  )
}

export default MainNavBar;