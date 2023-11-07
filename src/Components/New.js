import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Page = () => {
    const { addItem } = useCart();
    const products = [
        {
            "id": 1,
            "name": "Desert Sportive Canvas Sock Sneakers - GREY",
            "image": "images/new/new-1.jpg",
            "price": " 200",
        },
        {
            "id": 2,
            "name": "Desert Men's Stylish Casual Lace-up Leather Sneakers",
            "image": "images/new/new-2.jpg",
            "price": "210",
        },
        {
            "id": 3,
            "name": "Chicago Perforated Clogs For Men ",
            "image": "images/new/new-3.jpg",
            "price": " 220",
        },
        {
            "id": 4,
            "name": "Genuine Leather Slip On Shoes - Brown",
            "image": "images/new/new-4.jpg",
            "price": " 230",
        },
    ];
    return (
        <div>
            <Container className='new'>
                <h2 className='text-dark mb-5 fw-bold'><span className='text-danger'>new</span> arrival</h2>
                <Row>
                    {products.map((item) => (
                        <Col md="3">
                            <Card className='new-card mb-3  wow fadeInUp'>
                                <Card.Img className='img-fluid m-auto pt-3' src={item.image} />
                                <Card.Body>
                                    <Card.Title className='name'>{item.name}</Card.Title>
                                    <div className='new-btn'>
                                        <Link><Button className='btn btn-danger'>more details</Button></Link>
                                        <Link onClick={() => addItem(item)} >
                                            <i className='fas fa-cart-plus ml-3 text-danger fa-xl'></i>
                                        </Link>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                    ))}

                </Row>
            </Container>
        </div>
    )
};
function New() {
    return (
        <div>
            <Page />
        </div>
    )
};
export default New;