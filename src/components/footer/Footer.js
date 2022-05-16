import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram } from 'react-icons/bs'

function Footer() {
  return (
    <Container
    className="text-center text-black"
  >
    <Container className='pt-2'>
      <section className='mb-2'>
      <a tag='a' color='none' className='m-2 ' style={{ color: '#ac2bac' }}
        >
          <BsInstagram size='30px'/>
        </a>

      <a color='none' className='m-2' style={{ color: '#3b5998' }}>
      <BsFacebook size='30px'/>
      </a>

      </section>
    </Container>

      <Row>
        <Col className='text-center py-3'>Copyright &copy; AS Web Design</Col>
      </Row>
    </Container>

  );
}

export default Footer;
