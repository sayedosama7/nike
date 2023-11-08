import React from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

function Page() {
    const { addItem } = useCart();
    const products = [
        {
            "id": 1,
            "name": "Nike Air Jordan-01",
            "image": "images/popular/popular-1.jpg",
            "price": " 200",
        },
        {
            "id": 2,
            "name": "Nike Air Jordan-10",
            "image": "images/popular/popular-2.jpg",
            "price": "210",
        },
        {
            "id": 3,
            "name": "Nike Air Jordan-100",
            "image": "images/popular/popular-3.jpg",
            "price": " 220",
        },
        {
            "id": 4,
            "name": "Nike Air Jordan-001",
            "image": "images/popular/popular-4.jpg",
            "price": " 230",
        },
    ];

    return (
        <div>
            <Container className='pt-5 all-products'>
                <Row>
                    <Col md='12 mb-4'>
                        <h2 className='text-dark'>Our <span className='text-danger'>Popular</span> Products</h2>
                        <p className='text-muted'>Experience top-notch quality and style with our sought-after <br /> selections. Discover a world of comfort, design, and value </p>
                    </Col>
                    {products.map((item) => (
                        <Col md='3' className='text-center'>

                            <Card className='box wow fadeInUp' data-wow-delay=".2s">
                                <div className='wow fadeInUp' data-wow-delay=".4s">
                                    <img className='img-fluid' alt="Sample" src={item.image} />
                                </div>
                                <hr style={{height:"3px"}} className='m-0 text-info'/>
                                <CardBody className='bg-white'>

                                    <CardTitle className='text-danger bg-white fw-bold' tag="h5">
                                        {item.name}
                                    </CardTitle>

                                    <CardSubtitle className="my-2 text-muted" tag="h6">
                                        {item.price} $
                                    </CardSubtitle>
                                    <CardSubtitle className="my-2 text-warning" tag="h4">
                                        <h3>
                                            &#9733; &#9733; &#9733;
                                        </h3>

                                    </CardSubtitle>

                                    <button onClick={() => addItem(item)} className='btn btn-danger px-5 mt-2 fw-bold'>add to cart</button>

                                </CardBody>

                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


        </div>
    )
};
function Popular() {
    return (
        <div>
            <Page />
        </div>
    )
}
export default Popular