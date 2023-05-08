import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import logoHeader from '../assets/logo_header.png'

/* Cette fonction définit la barre de navigation de l'application, avec des liens 
   de navigation créés avec NavLink. Les liens pointent vers l'URL about et Accueil */ 

function Navbar() {
  return (
    <nav className="navbar">
        <NavLink to='/'>
          <div className="navbar__logo">
              <img src={logoHeader} alt="logo" width='200'height='62' />
          </div>
        </NavLink>
        <NavLink to='/'>
          Accueil 
          </NavLink>
        <NavLink to='/about'>
          A propos 
        </NavLink>
    </nav>
  )
}

export default Navbar