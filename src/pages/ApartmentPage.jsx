import React from 'react'
import './ApartmentPage.scss'
import { ApartmentDescription } from '../components/DescriptionPanel'
import { ApartmentBanner } from '../components/ImageBanner'
import { ApartmentHeader } from '../components/ApartmentHeader'

function ApartmentPage() {
  return (
    <div className='apartment-page'>
        <ApartmentBanner />
        <ApartmentHeader />
        <div className='apartment__description__area'>
            <ApartmentDescription />
            <ApartmentDescription />
        </div>
    </div>
  )
}

export default ApartmentPage