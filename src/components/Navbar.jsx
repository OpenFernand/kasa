import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className="navbar">
        <NavLink to='/'>
          <div className="navbar__logo">
              <img src="logo.png" alt="logo" width='200'height='68' />
          </div>
        </NavLink>

        <NavLink to='/'> Accueil </NavLink>
        <NavLink to='/about'> A propos </NavLink>
    </nav>
  )
}

export default Navbar