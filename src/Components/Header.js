import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='pt-5'></div>
            <div className='pt-5'></div>
            <Container className='header'>
                <Row>
                    <Col md='6' className='box wow fadeInUp'data-wow-delay=".2s">
                        <p className='text-danger'>Our Summer collections</p>
                        <h2 className='text-dark'>The New Arrival <br/> <span className='text-danger'>Nike</span> Shoes</h2>
                        <p className='py-3 text-dark'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                       <Link to='/products'><button className='btn btn-danger fw-bold btn-lg'>shop now</button></Link> 
                    </Col>

                    <Col md='6 wow fadeInUp'data-wow-delay=".4s">
                        <img className='img-fluid' src='images/header.jpg' alt='' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header