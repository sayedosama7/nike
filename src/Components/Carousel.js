import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Carousel() {
    return (
        <div>
            <Container className='my-5 carousel'>
                <Row>
                    <h2 className='text-danger mb-5 fw-bold'>special <span className='text-dark'>offer</span></h2>
                    <Col md='4' className='mb-3 wow fadeInUp' data-wow-delay=".3s">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1550,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper mr-4"
                        >
                            <SwiperSlide>
                                <img src='images/carousel/carousel-1.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-2.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-3.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-4.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-5.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-6.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-7.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-8.jpeg' alt='' />
                            </SwiperSlide>

                        </Swiper>
                    </Col>
                    <Col md='4' className='mb-3 wow fadeInUp swiper-none' data-wow-delay=".5s">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1600,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper mr-4"
                        >
                            <SwiperSlide>
                                <img src='images/carousel/carousel-1.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-2.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-3.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-4.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-5.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-6.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-7.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-8.jpeg' alt='' />
                            </SwiperSlide>

                        </Swiper>
                    </Col>
                    <Col md='4' className='mb-3 wow fadeInUp swiper-none' data-wow-delay=".7s">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1650,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper mr-4"
                        >
                            <SwiperSlide>
                                <img src='images/carousel/carousel-1.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-2.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-3.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-4.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-5.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-6.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-7.jpeg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='images/carousel/carousel-8.jpeg' alt='' />
                            </SwiperSlide>

                        </Swiper>
                    </Col>
                </Row>
                    <Link to='/products'>
                    <button className='btn btn-danger w-25 mt-3'>shop now</button>
                    </Link>
            </Container>

        </div>
    );
}
