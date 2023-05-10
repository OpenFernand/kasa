import React from 'react'
import './Main.scss'

/* Composant qui encapsulee d'autres éléments et leur applique des styles particuliers 
   en utilisant la classe CSS "main". Il prend une props "children" en entrée et renvoie une balise div */

function Main({ children }) {
  return <div className="main"> {children} </div>
}

export default Main