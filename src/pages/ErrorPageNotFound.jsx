import React from 'react'
import './ErrorPageNotFound.scss'
import Navbar from '../components/Navbar'
import Main from '../layout/Main'

export function ErrorPageNotFound() {
  return (
    <>
        <Navbar />
        <Main>
            <div className='error-page'>
                <h1>404</h1>
                <h2>Zut !!! La page que vous demandé n'existe pas</h2>
                <link to='/'>Retourner sur la page d'accueil</link>
            </div>
        </Main>
    </>
  )
  


}