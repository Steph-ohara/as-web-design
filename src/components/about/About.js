import React from 'react'
import { 
  Card,
  Row,
  Col,
  Container,
 } from 'react-bootstrap'

function About() {
  return (
    <Container className='pt-4'>
      <h1 className='text-center'>About Us!</h1>
    
    <Card style={{ height: '500px' }}>
      <Row className='g-0'>
        <Col md='4'>
          <Card.Img style={{ height: '500px' }} className='size' src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </Col>
        <Col md='8'>
          <Card.Body>
            <Card.Title>Stephanie O'Hara</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </Card.Text>
            <Card.Text>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    <br/>
    <Card style={{ height: '500px' }}>
      <Row className='g-0'>
        <Col md='8'>
          <Card.Body>
            <Card.Title>Alejandro Lopez</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </Card.Text>
            <Card.Text>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md='4'>
          <Card.Img style={{ height: '500px' }} className='size' src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </Col>
      </Row>
    </Card>

    </Container>
  );
}

export default About