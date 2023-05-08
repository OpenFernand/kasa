import React, { useEffect, useState } from 'react'
import './ApartmentGrid.scss'
import ApartmentCard from './ApartmentCard.jsx'

/* Ce composant affiche une grille d'appartements récupérée à partir d'un fichier 
data.json. On utilise les hooks useState et useEffect pour gérer l'état des données 
et effectuer des requêtes.On initialise un état local apartments avec  useState et on le passe à une div avec 
la classe grid. On fait une boucle map  pour itèrer sur chaque appartement dans la 
liste apartments et renvoie un composant ApartmentCard pour chaque appartement. */

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]); // destructuring

  useEffect(fetchApartments, [])

/* On fait un GET sur data.json avec la méthode fetch, puis on met à jour 
l'état local apartments à l'aide useState // useEffect avec un array vide 
=> exécute cette fonction au chargement du composant*/

  function fetchApartments() {
  fetch("data.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error)
  }

/* "map" de l'objet "apartments" pour générer une liste d'éléments "ApartmentCard" 
   en utilisant les données de chaque appartement du fichier JSON. 
   On récupère les propriéts titre de l'aprtment et l'URL de l'image de couverture imageUrl.*/
    return (
      <div className='grid'>
        {apartments.map((apartment) => {
          return (
          <ApartmentCard key={apartment.id}  id={apartment.id} title={apartment.title} imageUrl={apartment.cover}/>
        )})} 
      </div>
    )
  }

export default ApartmentGrid

