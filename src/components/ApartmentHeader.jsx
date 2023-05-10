import React from 'react'
import './ApartmentHeader.scss'

/* Cette fonction définit le composant ApartmentHeader, qui affiche l'en-tête d'un appartement. 
   La fonction extrait le prénom et le nom de l'hôte à partir de la propriété flat.host.name en 
   utilisant la méthode split. L'en-tête contient le titre de l'appartement, sa localisation et 
   une liste de tags (flat.tags), qui sont affichés en utilisant la méthode map.
   La partie basse de l'en-tête contient des informations sur l'hôte, sa photo, son nom et une note 
   basée sur la note moyenne de l'appartement (flat.rating). */
   
export function ApartmentHeader({ flat }) {
    const { name } = flat.host
    const [firstName, lastName] = name.split(' ')
    return (
        <div className='apartment__header'>
            <div className='apartment__title'>
                <h1>{flat.title}</h1>
                <h2>{flat.location}</h2>
                <div className='apartment__tags'>
                    {flat.tags.map((tag) => {
                        return <span key={tag}>{tag}</span>
                    })}
                </div>
            </div>
            <div className='apartment__owner'>
                <div className='apartment__owner__details'>
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>
                    <div className='apartment__owner__badge'>
                        <img src={flat.host.picture} alt='' />
                    </div>
                </div>
                <div className='apartment__owner__stars'>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={flat.rating >= num ? 'on' : ''}>★</span>
                    ))}
                </div>
            </div>
        </div>
    )
}