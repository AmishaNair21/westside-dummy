import React from 'react'
import Navbar from './components/navbar/Navbar'
import Downbar from './components/downbar/Downbar'
import HeroSection from './pages/home/HeroSection'
import Footer from './components/footer/Footer'

function App() {
  return (
<>
  <Navbar/>
  <HeroSection/>
  <Footer/>
  <Downbar/>

</>
  )
}

export default App