import React from 'react'
import ImageBanner from '../components/Banner'
import { DescriptionPanel } from '../components/DescriptionPanel'
import './About.css'

function About() {

  return (
    <>
        <ImageBanner />
        <div className='about__container'>
            <DescriptionPanel />
            <DescriptionPanel />
            <DescriptionPanel />
            <DescriptionPanel />
        </div>
    </>
    )
}

export default About