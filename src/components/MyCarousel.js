import React from 'react';
import { Carousel } from 'react-bootstrap';
import iphone1 from '../img/iphone-1.png';
import iphone2 from '../img/iphone-2.png';
import iphone3 from '../img/iphone-3.png';

export const MyCarousel = () => {
    return(
        <Carousel className="my-carousel">
            <Carousel.Item>
                <img
                className="carousel-item d-block"
                src={iphone1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-item d-block"
                src={iphone2}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-item d-block"
                src={iphone3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
    
}