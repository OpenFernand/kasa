import React from 'react'
import {ImageBanner} from '../components/ImageBanner'
import { DescriptionPanel } from '../components/DescriptionPanel'
import './About.scss'

function About() {

  return (
    <>
        <ImageBanner />
        <div className='about__container'>
            <DescriptionPanel title='Fiabilité' content='Cest très important'/>
            <DescriptionPanel title='Respect' content='Cest pas mal'/>
            <DescriptionPanel title='Service' content='Cest pas mal'/>
            <DescriptionPanel title='Responsabilité' content='Cest pas mal'/>
        </div>
    </>
    )
}

export default About