import React from 'react'
import "./navbar.css"
import logo from "../assets/shared/logo.svg"
function Navbar() {
  return (
    <div className='navbar'>
      <div>
      <img src={logo} alt="" />
      </div>
        <hr />
        <div className='navbar_link'>
            <ul>
                <li><span>00</span>HOME</li>
                <li><span>01</span>DESTINATION</li>
                <li><span>02</span>CREW</li>
                <li><span>03</span>TECHNOLOGIE</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar