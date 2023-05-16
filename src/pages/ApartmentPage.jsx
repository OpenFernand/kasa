import React, { useEffect, useState } from 'react'
import './ApartmentPage.scss'
import { ImageBanner } from '../components/ImageBanner'
import { ApartmentHeader } from '../components/ApartmentHeader'
import { DescriptionPanel } from '../components/DescriptionPanel'
import { useLocation } from 'react-router-dom'

/* Ce composant fonctionnel affiche les détails d'un appartement sélectionné. 
Il utilise le hook useLocation pour récupérer l'ID de l'appartement transmis à partir de l'URL.
Il charge les données des apartments à partir du fichier data.json en utilisant l'API fetch. */

function ApartmentPage() {
  const location = useLocation()
  const [flat, setFlat] = useState(null)

  useEffect(fetchApartmentsData, [location.state.apartmentId])
  
  /* Récupérer les données du fichier JSON. Rechercherl'appartement correspondant à l'ID. 
     Si l'Apartment est trouvé, il est enregistré en utilisant la méthode setFlat.*/
  function fetchApartmentsData() {
    fetch("data.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId)
        setFlat(flat)
      })
      .catch(console.error)
  }
  /* Si "flat" est null, signifie que les données n'ont pas encore été chargées. on affiche un message 
     de chargement...loading. Sinon, afficher l'image de bannière de l'appartement, l'en-tête et les équipements. */
  if (flat == null) return <div> ...Loading</div>
  return (
    <div className='apartment-page'>
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
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