import React from 'react'
import "./her.scss"
import Slide from '../../components/slidecomp/Slide'

function HeroSection() {
   const office=[
    <img src="../../src/assets/office/1.jpg"/>,
    <img src="../../src/assets/office/2.jpg"/>,
    <img src="../../src/assets/office/3.jpg"/>,
    <img src="../../src/assets/office/4.jpg"/>,
    <img src="../../src/assets/office/5.jpg"/>,
    <img src="../../src/assets/office/6.jpg"/>
   ]
   const oversize=[
     <img src="../../src/assets/oversize/11.jpg"/>,
     <img src="../../src/assets/oversize/22.jpg"/>,
     <img src="../../src/assets/oversize/33.jpg"/>,
     <img src="../../src/assets/oversize/44.jpg"/>,
     <img src="../../src/assets/oversize/55.jpg"/>,
    
   ]
  return (
    <div className='hero-section'>
<div className="office">
  <h2>Office Collections</h2>
<Slide slides={office}/>
</div>
<div className="oversize">
  <h2>Oversized T-Shirts</h2>
<Slide slides={oversize}/>
</div>



    </div>
  )
}

export default HeroSection