import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Media/carou1.jpg'
import img2 from '../Media/carou2.jpg'

function Carou() {
  return (
    <>
        <Carousel>
      <Carousel.Item>
        <img src={img1} alt="Image1" style={{"height":"400px","width":"100%"}}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="Image2" style={{"height":"400px","width":"100%"}} />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carou
