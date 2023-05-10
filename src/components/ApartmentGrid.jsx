import React, { useEffect, useState } from 'react'
import './ApartmentGrid.scss'
import ApartmentCard from './ApartmentCard.jsx'
import { getApartments } from '../api/apiApartments';

/* Ce composant affiche une grille d'appartements récupérée depuis 
   la fonctionn getApartments. On utilise les hooks useState et useEffect 
   pour gérer l'état des données et effectuer des requêtes. On initialise à 0
   l'état local apartments avec  useState. On lui passe une div avec 
   la classe grid. On fait une boucle map  pour itèrer sur chaque appartement 
   dans la liste apartments et renvoie un composant ApartmentCard pour chaque
   appartement. */

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    getApartments()
      .then((list) => {
        setApartments(list)
     //   console.log(list);
      })
      .catch(console.error)
  },
    [])

  /* Mise à jour de l'état apartments à l'aide de useState et on "map" l'objet "apartments" 
     pour générer une liste d'éléments "ApartmentCard"; On récupère titre et URL de l'image de couverture imageUrl.*/
  return (
    <div className='grid'>
      {apartments.map((apartment) => {
        return (
          <ApartmentCard key={apartment.id} id={apartment.id} title={apartment.title} imageUrl={apartment.cover} />
        )
      })}
    </div>
  )
}

export default ApartmentGrid

