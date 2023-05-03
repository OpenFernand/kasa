import React from 'react'
import './ApartmentGrid.scss'
import ApartmentCard from './ApartmentCard.jsx'
import apartments from '../data/data.json'

function ApartmentGrid() {
    return (
      <div className='grid'>
        {apartments.map((apartment) => {
          return (
          <ApartmentCard key={apartment.id} title={apartment.title} imageUrl={apartment.cover} />
        )})} 
      </div>
    )
  }

export default ApartmentGrid