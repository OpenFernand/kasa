import React from 'react'
import './HomePage.scss'
import Banner from '../layout/Banner.jsx'
import ApartmentGrid from '../components/ApartmentGrid.jsx'
import Navbar from '../components/Navbar.jsx'
import Main from '../layout/Main.jsx'
import Footer from '../layout/Footer.jsx'

function HomePage() {
  return (
    <>
        <Navbar />
        <Main>
            <Banner />
            <ApartmentGrid />
        </Main>
        <Footer />
    </>
  )
}

export default HomePage