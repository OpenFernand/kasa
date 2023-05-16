import React from 'react'
import './ErrorPageNotFound.scss'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

/* Cette fonction définit le composant React pour la page d'erreur 404. Renvoie
   une div contenant 2 titres et notre barre de navigation.Il est importé dans 
   notre routeur pour affichage lorsque l'utilisateur accède à une URL inexistante */
   
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
