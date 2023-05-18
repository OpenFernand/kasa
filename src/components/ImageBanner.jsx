import React, { useState } from 'react'
import './ImageBanner.scss'

/* Cette fonction est un composant qui affiche un carrousel d'images. Il prend en entrée 
   un tableau d'URLs d'images */
export function ImageBanner(props) {
  const pictures = props.pictures
  const [currentPicture, setCurrentPicture] = useState(0)
  const getClassName = (i) => {
    if (i === currentPicture) return 'show'
    return ''
  }

  /* Gestion du Carrousel : avec les boutons flechés qui seront appelés au clic.  
     Modulo % permet de revenir au début de la liste d'image.*/
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return
    }
    setCurrentPicture(currentPicture - 1)
  }

  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0
  }

  const getCarrouselOrDefaultImage = () => {
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt='' className={getClassName(i)}></img>
    ))
  }

  /* Gestion d'un appartement avec 1 seule photo*/
  if (pictures.length === 1) {
    return (
      <div className='image__banner'>
        <div className='image__container'>{getCarrouselOrDefaultImage()}
        </div>
      </div>
    )
  }

  /* On vérifie d'abord si des images sont disponibles. Si oui, on affiche deux boutons : passer à l'image 
     et revenir à l'image précédente et le compteur x/y. Les fonctions moveToNext et moveToPrevious sont appelées lors du clic */
  return (
    <div className='image__banner'>
      <div className='image__container'>{getCarrouselOrDefaultImage()}
      </div>
      {arePicturesAvailable() && (
        <>
          <button className='btn btn-previous' onClick={moveToPrevious}>
            <i className='fas fa-chevron-left'></i>
          </button>
          <span className='slide-counter'>
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className='btn btn-next' onClick={moveToNext}>
            <i className='fas fa-chevron-right'></i>
          </button>
        </>
      )}
    </div>
  )
}