import React, { useEffect } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { CartProvider } from 'react-use-cart';
import { useLocation } from 'react-router';

const Contact = () => {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <CartProvider>
      <NavBar />
      <div className='pt-5'></div>
      <Container fluid className='contact pt-4'>
        <Row>
          <Col>
            <h2 className="text-danger text-center my-5 wow fadeInUp" data-wow-delay=".2s">nike shoes</h2>
            <Form action='/sign-success'>

              <Form.Group className="mb-3 wow fadeInUp" data-wow-delay=".4s" controlId="formBasicName">
                <Form.Label>your full name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3 wow fadeInUp" data-wow-delay=".6s" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 wow fadeInUp" data-wow-delay=".8s" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3 wow fadeInUp" data-wow-delay="1s" controlId="formBasicPassword">
                <Form.Label>confirm Password</Form.Label>
                <Form.Control type="password" placeholder="confirm Password" />
              </Form.Group>

              <Button className='btn btn-danger mb-5 m-auto d-block wow fadeInUp' data-wow-delay="1.2s" type="submit">
                register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </CartProvider>
  )
}

export default Contact