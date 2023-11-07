import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Testimonials = () => {
    return (
        <div>
            <Container className='testimonials text-center'>
                <div className='text-center my-5'>
                    <h2 className='text-dark'>What Our <span className='text-danger'>Customers</span> Say?</h2>
                    <p className='text-muted'>Hear genuine stories from our satisfied customers <br /> about their exceptional experiences with us.</p>
                </div>
                <Row>

                    <Col md='3' className='wow fadeInUp' data-wow-delay=".2s">
                        <img src='images/testimonials/testimonials-1.jpeg' alt='tes' />
                        <p className='text-muted'>The attention to detail and the quality of the product exceeded my expectations.Highly recommended!</p>
                        <p className='text-muted'><i className='fas fa-star text-danger'></i> (4.5)</p>
                        <h3 className='text-danger'>sayed osama</h3>
                    </Col>

                    <Col md='3' className='wow fadeInUp' data-wow-delay=".6s">
                        <img src='images/testimonials/testimonials-2.jpeg' alt='tes' />
                        <p className='text-muted'>The product not only met but exceeded my expectations.I'll definitely be a returning customer!</p>
                        <p className='text-muted'><i className='fas fa-star text-danger'></i> (4.5)</p>
                        <h3 className='text-danger'>Lota Mongeskar</h3>
                    </Col>

                    <Col md='3' className='wow fadeInUp' data-wow-delay=".8s">
                        <img src='images/testimonials/testimonials-3.jpeg' alt='tes' />
                        <p className='text-muted'>The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p>
                        <p className='text-muted'><i className='fas fa-star text-danger'></i> (4.5)</p>
                        <h3 className='text-danger'>Morich Brown</h3>
                    </Col>

                    <Col md='3' className='wow fadeInUp' data-wow-delay="1s">
                        <img src='images/testimonials/testimonials-4.jpeg' alt='tes' />
                        <p className='text-muted'>The product not only met but exceeded my expectations. I'll definitely be a returning customer!</p>
                        <p className='text-muted'><i className='fas fa-star text-danger'></i> (4.5)</p>
                        <h3 className='text-danger'>sayed osama</h3>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Testimonials