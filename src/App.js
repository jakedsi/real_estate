import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import ChooseUs from './components/Hero/ChooseUs'
import PopularProperty from './components/Hero/PopularProperty'
import Comfort from './components/Hero/Comfort'
import LatestInfo from './components/Hero/LatestInfo'
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChooseUs />
      <PopularProperty />
      <Comfort />
      <LatestInfo />
    </div>
  )
}

