import React from 'react'
import './ImageBannerAbout.scss'
import ImageAboutCover from '../assets/background_about_cover.png'

/* Ce composant affiche l'image de couverture */

export function ImageBannerAbout() {
  return (
      <div className='image__container__about'>
        <img src={ImageAboutCover} className='show' alt='cover' />
      </div>
  )
}
