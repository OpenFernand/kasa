import React from 'react'
import './ImageBanner.scss'

export function ImageBanner(props) {
  return (
    <div className='image__banner'>
        <img src={props.imageURL} alt="" />
    </div>
  )
}