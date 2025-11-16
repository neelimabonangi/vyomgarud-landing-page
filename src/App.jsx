import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="font-sans">
      <Hero/>
      <About/>
      <Capabilities/>
      <Highlights/>
      <Footer/>
    </div>
  )
}
