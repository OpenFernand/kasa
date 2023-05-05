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
    }

    setCurrentPicture((currentPicture + 1) % pictures.length) // modulo limite dans la longueur de l' Array
  }

  return (
    <div className='image__banner'>
      <div className='image__container'>
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt='' className={getClassName(i)} ></img>
        ))}
      </div>
            <button onClick={moveToNext}>Previous</button>
            <button onClick={moveToPrevious}> Next</button>
    </div>
  )
}