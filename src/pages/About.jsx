import React from 'react'
import {ImageBanner} from '../components/ImageBanner'
import { DescriptionPanel } from '../components/DescriptionPanel'
import './About.scss'
import Footer from '../layout/Footer'
import Navbar from '../components/Navbar'
// Navbar et Footer devraient etre des composants 
// réutilisé le SPA 




function About() {

  return (
    <>
        <Navbar />
        <ImageBanner />
        <div className='about__container'>
            <DescriptionPanel />
            <DescriptionPanel />
            <DescriptionPanel />
            <DescriptionPanel />
        </div>
        <Footer />
    </>
    )
}

export default About