import React, {useState} from 'react'
import './ImageBanner.scss'

export function ImageBanner(props) {
  const pictures = props.pictures

  const [currentPicture, setCurrentPicture] = useState(0)

  const getClassName = (i) => {
    if (i === currentPicture) return 'show'
    return ''
  }

  const moveToNext =() => {
    setCurrentPicture((currentPicture + 1) % pictures.length) // modulo limite dans la longueur de l' Array
  }

  const moveToPrevious =() => {
    const newCurrentPicture = currentPicture - 1
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length -1)
      return
    }
    setCurrentPicture(currentPicture - 1)
  }

// Les chevrons se montrent que si pictures sont available 
const arePicturesAvailable = () => {
  return pictures && pictures.length > 0
}

// Pour Gérer la page "A propos" et gerer le map
// s'il n'y a pas pas de props. picture il doit afficher simplemnt une image au hasard

const getCarouselOrDefaultImage = () => {
  if (!pictures || pictures.length === 0) {
    return <img src = 'https://picsum.photos/800' className='show' alt='' />
    }
    return pictures.map((pic, i) => (
      <img key={pic} src = {pic} alt='' className = {getClassName(i)}></img>
    ))
  }
  return (
    <div className='image__banner'>
      <div className='image__container'>{getCarouselOrDefaultImage()}
      </div>
      {arePicturesAvailable() && ( // Les chevrons se montrent que si pictures sont available  
        <>
          <button className='btn btn-next' onClick={moveToNext}>
            <i className='fas fa-chevron-left'></i>
          </button>
          <button className='btn btn-previous' onClick={moveToPrevious}>
            <i className='fas fa-chevron-right'></i>
          </button>
        </>
      )}
    </div>
  )
}