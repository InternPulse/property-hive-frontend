import { useState } from 'react'
import Navbar from './Component/HomeComponent/common/Header/Navbar'
import './App.css'
import HeroSection from './Component/HomeComponent/HeroSection/HeroSection'
import ContactUs from './Component/HomeComponent/ContactUs/ContactUs'

function App() {
 

  return (
    <div>
      
      <Navbar/>
     <HeroSection/>
    
     <ContactUs/>
    </div>
  )
}

export default App
