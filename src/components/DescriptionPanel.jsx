import React, { useState } from 'react';
import './DescriptionPanel.scss';

/* Cette fonction Collapse affiche un panneau avec un titre et un contenu. Le contenu est masqué 
   par défaut et s’ affiche ou se masque au clic sur le chevron haut ou bas. 
   On utilise un hook d'état (useState) pour stocker si le contenu est visible ou non. 
   Au clic sur le chevron, la fonction showContent est appelée pour changer la valeur de 
   l'état isContentVisible. */
export function DescriptionPanel(props) {
//* Actuel
    const [isContentVisible, setIsContentVisible] = useState(false)
    const showContent = () => {
        setIsContentVisible(!isContentVisible)
    }
    return ( //le contenu est affiché si isContentVisible est vrai.
        <div className="description__panel">
        <p className="description__header">
            <span>{props.title}</span>
            <i className="fas fa-chevron-down" onClick={showContent}></i>
        </p>
        {isContentVisible && <p className="description__content" >{props.content} </p>}
        </div>
    );
// Fin actuel 

/* version définitive---

    const [isContentVisible, setIsContentVisible] = useState(false)
    const showContent = () => {
        setIsContentVisible(!isContentVisible)
    const contentClass = (isContentVisible ? 'visible' : "hidden") + 'description__content'
    const chevronClass = (isContentVisible ? 'fa-chevron-up' : "fa-chevron-down") + 'fas'
    return (
        <div className="description__panel">
            <p className="description__header" onClick={showContent}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>
            <p className={contentClass}>{props.content}</p>
        </div>
    );
}
*/
}