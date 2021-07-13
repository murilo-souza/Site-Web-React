import React from 'react';
import {Carousel} from 'react-bootstrap';
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

export function WebCarousel(){
  return (
    <Carousel style={{width:'100%'}}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
  );
}