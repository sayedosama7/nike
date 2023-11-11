import React, { useEffect } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Col, Container, Row } from "react-bootstrap"
import { Link, useLocation } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'

const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <CartProvider>
      <NavBar />
      <div className='pt-5'></div>
      <Container fluid className='pt-4'>
        <Row>
          <Col md='12' className="text-center about">
            <h2 className="text-danger mb-5 h1 wow fadeInUp">nike shoes</h2>
            <h5 className="my-3 wow fadeInUp">We Champion Continual Progress For Athletes And Sport By Taking Action <br /> To Help Athletes Reach Their Potential. Every Job At NIKE, Inc. <br /> Is Grounded In A Team-First Mindset, Cultivating A Culture Of Innovation  <br />And A Shared Purpose To Leave An Enduring Impact.</h5>
            <Link to='/'><button className="btn btn-danger text-danger fw-bold btn-lg mt-3 wow fadeInUp">back to home</button></Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </CartProvider>
  )
}

export default About