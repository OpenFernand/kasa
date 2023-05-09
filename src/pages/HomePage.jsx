import React from 'react'
import './HomePage.scss'
import Banner from '../layout/Banner.jsx'
import ApartmentGrid from '../components/ApartmentGrid.jsx'

function HomePage() {
  return (
    <>
      <Banner />
      <ApartmentGrid />
    </>
  )
}

export default HomePage