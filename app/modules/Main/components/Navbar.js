import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import { navbar, awslogo } from '../styles/NavbarStyles.css'

export default function Navbar (props) {
  return (
    <nav className={navbar + " navbar navbar-light bg-faded" }>
      <button className="navbar-toggler hidden-lg-up" 
        type="button" data-toggle="collapse" 
        data-target="#navbarResponsive" aria-controls="navbarResponsive" 
        aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <img className={awslogo} src="http://icons.veryicon.com/png/Internet%20%26%20Web/Socialmedia/AWS.png"></img>
      <div className="collapse navbar-toggleable-md" id="navbarResponsive">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link to="/dash" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/groups" className="nav-link" href="#">Log Groups</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}