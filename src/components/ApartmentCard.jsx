import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentCard.css'

function ApartmentCard() {
  return (
    <div className='ApartmentCard'>
        <Link to="/flat">
            <div className='apartmentCard__subtitle'>Titre de la location</div>
        </Link>
    </div>
  )
}

export default ApartmentCard