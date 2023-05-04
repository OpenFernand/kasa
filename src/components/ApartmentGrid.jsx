import React, { useEffect, useState } from 'react'
import './ApartmentGrid.scss'
import ApartmentCard from './ApartmentCard.jsx'

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]); // destructuring

  useEffect(fetchApartments, [])

//useEffect avec un array vide => exécute cette fonction au chargement du composant
  function fetchApartments() {
  fetch("data.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error)
  }

    return (
      <div className='grid'>
        {apartments.map((apartment) => {
          return (
          <ApartmentCard key={apartment.id} title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
        )})} 
      </div>
    )
  }

export default ApartmentGrid