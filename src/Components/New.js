import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Page = () => {
    const { totalItems } = useCart();

    const [detail, setDetail] = useState([]);
    const [Close, setClose] = useState(false)
    const detailPage = (product) => {
        setDetail([{ ...product }])
        setClose(true)
    }

    const { addItem } = useCart();
    const products = [
        {
            "id": 1,
            "name": "Desert Sportive Canvas Sock Sneakers - GREY",
            "image": "images/new/new-1.jpg",
            "price": " 200",
            "description": "Desert Sportive Canvas Sock Sneakers - GREYDesert Sportive Canvas Sock Sneakers"
        },
        {
            "id": 2,
            "name": "Desert Men's Stylish Casual Lace-up Leather Sneakers",
            "image": "images/new/new-2.jpg",
            "price": "210",
            "description": "Desert Sportive Canvas Sock Sneakers - GREYDesert Sportive Canvas Sock Sneakers"
        },
        {
            "id": 3,
            "name": "Chicago Perforated Clogs For Men ",
            "image": "images/new/new-3.jpg",
            "price": " 220",
            "description": "Desert Sportive Canvas Sock Sneakers - GREYDesert Sportive Canvas Sock Sneakers"
        },
        {
            "id": 4,
            "name": "Genuine Leather Slip On Shoes - Brown",
            "image": "images/new/new-4.jpg",
            "price": " 230",
            "description": "Desert Sportive Canvas Sock Sneakers - GREYDesert Sportive Canvas Sock Sneakers"
        },
    ];
    return (
        <div>
            {
                Close ?
                    <div className='detail-container'>
                        <div className='detail-contant'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Link className="nav-link position-relative" to="/cart">
                                    <i className="fas fa-cart-plus mx-2 fa-xl text-danger"></i>
                                    <span className='position-absolute text-info'>({totalItems})</span>
                                </Link>
                                <button className='close' onClick={() => setClose(false)}><i className='fas fa-xmark'></i></button>
                            </div>

                            {
                                detail.map((item) => {
                                    return (
                                        <div className='p-3 d-flex detail-info' key={item.id} >
                                            <div className="img-box">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className='ml-5'>
                                                <p className="text-danger m-0">{item.name}</p>
                                                <p className="text-muted m-0 des">{item.description}</p>
                                                <h3 className='text-warning'>
                                                    &#9733; &#9733; &#9733;
                                                </h3>
                                                <p className="text-info fw-bold m-1">{item.price} $</p>
                                                <button onClick={() => addItem(item)} className='btn btn-danger   fw-bold'>add to cart</button>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div> : null
            }
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
                                        <Link onClick={() => detailPage(item)}><Button className='btn btn-danger more'>more details</Button></Link>
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