import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import ChooseUs from './components/Hero/ChooseUs'
import PopularProperty from './components/Hero/PopularProperty'
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChooseUs />
      <PopularProperty />
    </div>
  )
}

