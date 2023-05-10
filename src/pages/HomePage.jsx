import React from 'react'
import './HomePage.scss'
import Banner from '../layout/Banner.jsx'
import ApartmentGrid from '../components/ApartmentGrid.jsx'

/* Cette fonction est un composant fonctionnel représantant la page d'accueil de 
   l'application. Elle englobe les deux composants Banner et ApartmentGrid.
   Le 1er affiche une bannière publicitaire, le 2nd affiche une grille d'appartements. */
   
function HomePage() {
  return (
    <>
      <Banner />
      <ApartmentGrid />
    </>
  )
}

export default HomePage