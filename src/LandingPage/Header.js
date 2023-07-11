import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
      <img src="/imgs/jeep.png" alt="" />
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Ride">Ride</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Reviews">Reviews</a></li>
      </ul>
      <button><Link to="signUp">Sign Up</Link></button>
      <button><Link to="signIn">Sign In</Link></button>
    </div>
  )
}

export default Header
