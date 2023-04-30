import React from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './layout/Banner.jsx'
import ApartmentGrid from './components/ApartmentGrid.jsx'
import './App.scss'
import Main from './layout/Main.jsx'
import Footer from './layout/Footer.jsx'

function App() {
  return (
    <div>
        <Navbar />
        <Main>
            <Banner />
            <ApartmentGrid />
        </Main>
        <Footer />
    </div>
  )
}

export default App