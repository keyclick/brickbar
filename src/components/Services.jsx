import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1a from '../assets/img1a.png';
import img2a from '../assets/img2a.png';


const Services = () => {
  return (
    <div className='services'>
        <Carousel 
            infiniteLoop 
            autoPlay 
            showStatus={false} 
            showArrows={false} 
            interval={1000} 
            showThumbs={false}
            showIndicators={false}
        > 
            <div>
                <img src={img1a} alt="Item1" />
                <p className='legend'>Calisthenics</p>  
            </div>
            <div>
                <img src={img2a} alt="Item2" />
                <p className='legend'>Weight Loss</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services