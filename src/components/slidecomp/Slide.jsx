import React from 'react'
import "./style.scss"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide({slides}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
<div className='slide'>
<Slider {...settings}>
    {slides.map((slide, index) => (
      <div key={index}>
        {slide}
      </div>
    ))}
  </Slider>
</div>
  )
}

export default Slide