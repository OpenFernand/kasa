import React from 'react'
import './Footer.scss'
import logoFooter from '../assets/logo_footer.png'

/* Ce composant représente la fonction qui créée le pied de page */
function Footer() {
  return (
    <div className="footer">
        <div className="footer__logo">
            <img src={logoFooter} alt='logo' width='100' />
        </div>
       <div className="footer__text"> © 2020 Kassa All rights reserved</div>
    </div>
  )
}

export default Footer    