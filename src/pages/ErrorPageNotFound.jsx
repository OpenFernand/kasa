import React from 'react'
import './ErrorPageNotFound.scss'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

/* Cette fonction définit le composant React pour la page d'erreur 404. Renvoie
   une div contenant un titre de niveau 1 et un titre de niveau 2. Il inclut 
   également la barre de navigation, qui est appelé "Navbar".*/

export function ErrorPageNotFound() {
  return (
    <>
      <Navbar />
      <div className='error-page'>
        <h1>404</h1>
        <h2>Zut !!! La page que vous demandez n'existe pas</h2>
        <Link to='/'>Retourner sur la page d'accueil</Link>
      </div>
    </>
  )
}
