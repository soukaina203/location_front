import React from 'react'

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
      <button><a href="#SignUp">Sign Up</a></button>
      <button><a href="#SignIn">Sign In</a></button>
    </div>
  )
}

export default Header
