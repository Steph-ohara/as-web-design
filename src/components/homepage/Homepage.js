import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';


function Homepage() {
  return (
    <Container>
    <Carousel>
        <Carousel.Item>
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </Container>
    )
}

export default Homepage