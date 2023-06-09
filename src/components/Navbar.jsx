import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import logoHeader from '../assets/logo_header.png'

/* Cette fonction définit la barre de navigation de l'application, avec des liens 
   de navigation créés avec NavLink qui pointent vers l'URL "A propos" et "Accueil" */

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to='/'>
        <div className="navbar__logo">
          <img src={logoHeader} alt="logo" />
        </div>
      </NavLink>
      <div className='navbar__links'>
        <NavLink to='/'>
          Accueil
        </NavLink>
        <NavLink to='/about'>
          A propos
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar