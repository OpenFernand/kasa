import React from 'react'
import './ApartmentPage.scss'
import { ImageBanner } from '../components/ImageBanner'
import { ApartmentHeader } from '../components/ApartmentHeader'
import { DescriptionPanel } from '../components/DescriptionPanel'

function ApartmentPage() {
  return (
    <div className='apartment-page'>
        <ImageBanner />
        <ApartmentHeader />
        <div className='apartment__description__area'>
            <DescriptionPanel />
            <DescriptionPanel />
        </div>
    </div>
  )
}

export default ApartmentPage