import React from 'react'
import './ApartmentPage.scss'
import { ImageBanner } from '../components/ImageBanner'
import { ApartmentHeader } from '../components/ApartmentHeader'
import { DescriptionPanel } from '../components/DescriptionPanel'
import Footer from '../layout/Footer'
import Navbar from '../components/Navbar'
// Navbar et Footer devraient etre des composants 
// réutilisé le SPA 

function ApartmentPage() {
  return (
    <div className='apartment-page'>
        <Navbar /> 
        <ImageBanner />
        <ApartmentHeader />
        <div className='apartment__description__area'>
            <DescriptionPanel />
            <DescriptionPanel />
        </div>
        <Footer />
    </div>
  )
}

export default ApartmentPage