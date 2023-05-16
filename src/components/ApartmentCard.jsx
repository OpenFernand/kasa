import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentCard.scss'

/* Ce composant fonctionnel retourne une Card d'appartement avec une image et un titre. Au clic sur la Card, 
   on est redirigé vers une page détaillée de apartment. On utilise props pour afficher l'image, props.id 
   pour stocker l'identifiant unique de l'appartement. Cela permet de faire passer des informations entre les pages à l'aide des propriétés  */

function ApartmentCard(props) {
  return (
    <Link to='/flat' state={
      { apartmentId: props.id } // identifiant unique appellé dans ApartmentPage
    }>
      <div className='apartment'>
        <img src={props.imageUrl} alt="" />
        <div className='apartment__subtitle'>{props.title}</div>
      </div>
    </Link>
  )
}

export default ApartmentCard