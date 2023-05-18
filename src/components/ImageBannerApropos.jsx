import React from 'react'
import './ImageBanner.scss'
import ImageAboutCover from '../assets/background_about_cover.png'

/* Cette fonction est un composant qui affiche 1 image */
export function ImageBannerApropos(props) {
  const pictures = props.pictures
  const getCarrouselOrDefaultImage = () => {
    if (!pictures || pictures.length === 0) {
      return <img src={ImageAboutCover} className='show' alt='' />
    }
  }
  return (
    <div className='image__banner'>
      <div className='image__container'>{getCarrouselOrDefaultImage()}
      </div>

    </div>
  )
}
