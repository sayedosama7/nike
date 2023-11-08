import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { CartProvider, useCart } from 'react-use-cart';
import ScrollToTop from 'react-scroll-to-top';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Page = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      "name": "Nike Air Jordan-01",
      "image": "images/popular/popular-1.jpg",
      "price": " 200",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 2,
      "name": "Nike Air Jordan-10",
      "image": "images/popular/popular-2.jpg",
      "price": "210",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 3,
      "name": "Nike Air Jordan-100",
      "image": "images/popular/popular-3.jpg",
      "price": " 220",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 4,
      "name": "Nike Air Jordan-001",
      "image": "images/popular/popular-4.jpg",
      "price": " 230",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 5,
      "name": "Nike Air Jordan-01",
      "image": "images/products/1.jpg",
      "price": "100",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 6,
      "name": "Nike Air Jordan-01",
      "image": "images/products/2.jpg",
      "price": "200",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 7,
      "name": "Nike Air Jordan-01",
      "image": "images/products/3.jpg",
      "price": "300",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 8,
      "name": "Nike Air Jordan-01",
      "image": "images/products/4.jpg",
      "price": "50",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 9,
      "name": "Nike Air Jordan-01",
      "image": "images/products/5.jpg",
      "price": "120",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 10,
      "name": "Nike Air Jordan-01",
      "image": "images/products/6.jpg",
      "price": "150",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 11,
      "name": "Nike Air Jordan-01",
      "image": "images/products/7.jpg",
      "price": "180",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 12,
      "name": "Nike Air Jordan-01",
      "image": "images/products/8.jpg",
      "price": "155",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 13,
      "name": "Nike Air Jordan-01",
      "image": "images/products/9.jpg",
      "price": "110",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 14,
      "name": "Nike Air Jordan-01",
      "image": "images/products/10.jpg",
      "price": "210",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Poro.",
    },
    {
      "id": 15,
      "name": "Nike Air Jordan-01",
      "image": "images/products/11.jpg",
      "price": "320",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 16,
      "name": "Nike Air Jordan-01",
      "image": "images/products/12.jpg",
      "price": "180",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 17,
      "name": "Nike Air Jordan-01",
      "image": "images/products/13.jpeg",
      "price": "155",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 18,
      "name": "Nike Air Jordan-01",
      "image": "images/products/14.jpeg",
      "price": "125",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 19,
      "name": "Nike Air Jordan-01",
      "image": "images/products/15.jpeg",
      "price": "135",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    },
    {
      "id": 20,
      "name": "Nike Air Jordan-01",
      "image": "images/products/16.jpeg",
      "price": "145",
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus voluptatem hic veniam. Ut nesciunt unde labore iste quasi! Porro.",
    }
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



      <Container className='all-products products'>
        <h2 className="text-danger text-center my-5 wow fadeInUp" data-wow-delay=".2s">nike shoes</h2>
        <Row>
          {products.map((item) => (
            <Col md='6' lg='3' className='text-center'>

              <Card className='box wow fadeInUp' data-wow-delay=".2s">
                <div className='wow fadeInUp' data-wow-delay=".4s">
                  <img className='img-fluid' alt="Sample" src={item.image} />
                </div>
                <hr style={{ height: "3px" }} className='m-0 text-info' />
                <CardBody className='bg-white'>

                  <CardTitle className='text-danger bg-white fw-bold' tag="h5">
                    {item.name}
                  </CardTitle>

                  <CardSubtitle className="my-2 text-info fw-bold" tag="h6">
                    {item.price} $
                  </CardSubtitle>

                  <CardSubtitle className="my-2 text-muted discount" tag="h6">
                    20% discount for VF Cash. Use code VFWF20 Get it Saturday, December 3 - Monday, December 5EGP 21.00 shipping
                  </CardSubtitle>
                  <CardSubtitle className="my-2 text-warning" tag="h4">
                    <h3>
                      &#9733; &#9733; &#9733;
                    </h3>

                  </CardSubtitle>
                  <Link className='link' onClick={() => detailPage(item)}><Button className='btn btn-danger d-block m-auto more'>more details</Button></Link>
                  <button onClick={() => addItem(item)} className='btn btn-danger px-5 mt-2 fw-bold'>add to cart</button>

                </CardBody>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}


const Products = () => {
  return (
    <CartProvider>
      <NavBar />
      <div className='pt-5'></div>
      <Page />
      <Footer />
      <ScrollToTop
        smooth
        viewBox="0 0 48 48"
        svgPath="M13.9871,29.8559c-.5827.2416-1.18.4464-1.7836.6305a19.2488,19.2488,0,0,1-2.39.5714,8.7143,8.7143,0,0,1-1.9717.1448,5.2621,5.2621,0,0,1-2.1139-.5681,4.1281,4.1281,0,0,1-1.96-2.1123,5.1361,5.1361,0,0,1-.11-2.9227,11.8479,11.8479,0,0,1,1.85-4.0986c.5727-.8469,1.2181-1.642,1.8719-2.428q.96-1.1543,1.9466-2.2862a12.4866,12.4866,0,0,0-1.0551,2.2024,8.4194,8.4194,0,0,0-.476,1.9091,4.3,4.3,0,0,0,.262,2.1957,3.5242,3.5242,0,0,0,1.9552,1.8407,5.0891,5.0891,0,0,0,1.8939.3019A14.0442,14.0442,0,0,0,14.88,24.795c1.09-.25,2.1745-.5251,3.2538-.8187C24.7215,22.1838,44.5,16.8589,44.5,16.8589S21.6463,26.68,13.9871,29.8559Z
        "
        color='#ff6452'
        style={{ backgroundColor: '#fff', width: '60px' }}
        className='animate__animated animate__flash animate__infinite	infinite animate__slower'
      />
    </CartProvider>
  )
}

export default Products