import React from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import ApartmentGrid from './components/ApartmentGrid.jsx'
import './App.css'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'


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