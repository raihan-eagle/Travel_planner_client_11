import React from 'react';
import { Carousel } from 'react-bootstrap';

// https://i.ibb.co/7znwfcg/27.jpg
// https://i.ibb.co/0975yCS/25.jpg

const Banner = () => {
    return (
        <div>
            <Carousel className="bg-dark mx-md-3 my-2">
                <Carousel.Item>
                    <img
                        className="d-block w-md-50 m-auto img-fluid"
                        src="https://i.ibb.co/VSkjQ8y/photo-1469854523086-cc02fe5d8800-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className ='text-dark'>Calmness and Family</h3>
                        <p className ='text-dark'>Your trusted and safe partner.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-md-50 m-auto img-fluid"
                        src="https://i.ibb.co/0975yCS/25.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className ='text-white'>Friends</h3>
                        <p className ='text-white'>Lets adventure with no bounds</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-md-50 m-auto img-fluid"
                        src="https://i.ibb.co/7znwfcg/27.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className ='text-white'>Picnic</h3>
                        <p className ='text-white'>We take care everything for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;