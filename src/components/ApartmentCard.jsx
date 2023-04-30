import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentCard.scss'

function ApartmentCard() {
  return (
    <div className='apartment'>
        <Link to="/flat">
            <div className='apartment__subtitle'>Titre de la location</div>
        </Link>
    </div>
  )
}

export default ApartmentCard