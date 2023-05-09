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
    return ( // Methode ternaire : le contenu est affiché si isContentVisible est vrai
        <div className="description__panel">
            <p className="description__header">
                <span>{props.title}</span>
                <i className={`fas ${isContentVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={showContent}></i>
            </p>
            <div className={`description__collapse ${isContentVisible ? 'open' : ''} `}>
                <p className= 'description__content' >{props.content} </p>
            </div>
        </div>
    );
}