import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentCard.scss'

/* Cette fonction retourne une Card d'appartement avec une image et un titre. 
   Au clic sur la Card on est redirigé vers une page détaillée de aprtment.
   On utilise props pour afficher l'image, props.id pour stocker l'identifiant unique 
   de l'appartement transmis comme paramètre à la page détaillée de l'appartement*/
function ApartmentCard(props) {
  return (
    <Link to='/flat' state={
      { apartmentId: props.id }
    }>
      <div className='apartment'>
        <img src={props.imageUrl} alt="" />
        <div className='apartment__subtitle'>{props.title}</div>
      </div>
    </Link>
  )
}

export default ApartmentCard