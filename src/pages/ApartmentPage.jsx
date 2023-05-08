/*** Page d'un appartement : 
Ce composant utilise le hook useLocation pour récupérer l'ID de l'appartement transmis à partir de l'URL.
Chargement de données des appartements à partir du fichier data.json en utilisant l'API fetch de JavaScript. 
On flitre les données pour trouver l'appartement qui correspond à l'ID puis on le stocke avec useState (hook)
Si "flat" est null, signifie que les données n'ont pas encore été chargées. Dans ce cas, 
on affiche un message de chargement. Sinon, le composant affiche l'image de bannière de l'appartement, 
l'en-tête de l'appartement et les informations de description et d'équipements à l'aide de différents 
sous-composants (ImageBanner, ApartmentHeader et DescriptionPanel).
***/
import React, { useEffect, useState } from 'react'
import './ApartmentPage.scss'
import { ImageBanner } from '../components/ImageBanner'
import { ApartmentHeader } from '../components/ApartmentHeader'
import { DescriptionPanel } from '../components/DescriptionPanel'
import { useLocation } from 'react-router-dom'

function ApartmentPage() {
  const location = useLocation()
  const [flat, setFlat] = useState(null)
  console.log('flat', flat)

  useEffect(fetchApartmentsData, [location.state.apartmentId]) // Ajout de location.state.apartmentId

  function fetchApartmentsData() {
  fetch("data.json")
    .then((res) => res.json())
    .then((flats) => {
      const flat = flats.find((flat) => flat.id === location.state.apartmentId)
      setFlat(flat)
    })
    .catch(console.error)
  }
  if (flat == null) return <div> ...Loading</div> // Execute le loading pour laisser le temps de recharger la page 
    return (
      <div className='apartment-page'>
          <ImageBanner pictures={flat.pictures} />
          <ApartmentHeader flat={flat}  />
          <div className='apartment__description__area'>
              <DescriptionPanel 
              title='Description' 
              content={flat.description} />
              <DescriptionPanel 
              title='Equipments' 
              content={flat.equipments.map((eq, index) => (
                <li key={index}> {eq} </li>
              ))} />
          </div>
      </div>
    )
}

export default ApartmentPage