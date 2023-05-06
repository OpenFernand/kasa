/* Composant utilisé pour encapsuler d'autres éléments et leur
   appliquer des styles particuliers en utilisant la classe CSS "main"
   Il renvoie une balise "div" qui a une classe CSS "main" et qui contient 
   les éléments enfants qui y sont passés.
   Il prend un objet props "children" en entrée et renvoie une balise div */

import React from 'react'
import './Main.scss'

function Main({ children }) {
  return <div className="main"> {children} </div>
}

export default Main