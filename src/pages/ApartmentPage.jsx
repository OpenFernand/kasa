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
        <ImageBanner imageURL={flat.cover} />
        <ApartmentHeader flat={flat}  />
        <div className='apartment__description__area'>
            <DescriptionPanel title='Description' content={flat.description} />
            <DescriptionPanel title='Equipments' content={flat.equipments.map(eq => <li> {eq} </li>)} />
        </div>
    </div>
  )
}

export default ApartmentPage