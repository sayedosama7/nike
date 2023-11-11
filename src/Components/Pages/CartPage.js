import { CartProvider, useCart } from "react-use-cart";
import NavBar from "../NavBar";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from "react";
import Footer from "../Footer";

function Cart() {
  const { cartTotal, emptyCart, isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();


  if (isEmpty) return <>
    <Container>
      <Row>
        <Col>
          <div className="empty-cart">
            <h2 className="text-danger mb-5 wow fadeInUp">nike shoes</h2>
            <h3 className="my-3 wow fadeInUp">Your cart is empty</h3>
            <p>You have no items in your basket. To buy one or more items, click "Add To Cart" under to the item.</p>
            <Link to='/'><button className="btn btn-outline-danger text-danger fw-bold btn-lg mt-3 wow fadeInUp">back to home</button></Link>
          </div>
        </Col>
      </Row>
    </Container>

  </>
  return (
    <>
      <Container className="cart">
        <Row>

          <Col md='8 wow fadeInUp'>
            <h4>Cart shopping <span className="text-danger">({totalUniqueItems})</span></h4>
            {items.map((item) => (
              <Col md='12 p-4 mb-2 bg-white' key={item.id} className="cart-left">
                <div className="d-flex justify-content-between align-items-center box">
                  <div>
                    <img src={item.image} alt="" />
                    <p className="text-dark mt-2">{item.name}</p>
                    <p className="text-dark">{item.price} $</p>
                  </div>

                  <div>
                    <button className="btn btn-info fw-bold"
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      <i className="fas fa-minus fa-xl"></i>
                    </button>
                    <span className="mx-3 text-danger fw-bold">{item.quantity}</span>

                    <button className="btn btn-info fw-bold"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      <i className="fas fa-plus fa-xl"></i>
                    </button>
                  </div>
                </div>
                <button className="btn btn-danger remove" onClick={() => removeItem(item.id)}>remove item</button>
              </Col>
            ))}
          </Col>

          <Col md='4 bg-white text-dark p-3 cart-right wow fadeInUp'>
            <h6>CART SUMMARY</h6>
            <hr className="text-muted" />

            <div className="d-flex justify-content-between">
              <h6>Subtotal</h6>
              <h6 style={{ color: "#af1919" }} >Total Price ( {cartTotal} $)</h6>
            </div>
            <hr className="text-muted" />
            <Link className="cart-btn" to='/contact'>
              <button className="btn btn-danger d-block w-100">CHECKOUT ( {cartTotal} $)</button>
            </Link>
            <button onClick={() => emptyCart()} className="btn btn-info d-block w-100 mt-3">delete all products</button>
          </Col>

        </Row>
      </Container>
    </>
  );
}

function CartPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <CartProvider>
      <NavBar />
      <div className="pt-5"></div>
      <div className="pt-4"></div>
      <Cart />
      <Footer />
      <ScrollToTop
        smooth
        viewBox="0 0 48 48"
        svgPath="M13.9871,29.8559c-.5827.2416-1.18.4464-1.7836.6305a19.2488,19.2488,0,0,1-2.39.5714,8.7143,8.7143,0,0,1-1.9717.1448,5.2621,5.2621,0,0,1-2.1139-.5681,4.1281,4.1281,0,0,1-1.96-2.1123,5.1361,5.1361,0,0,1-.11-2.9227,11.8479,11.8479,0,0,1,1.85-4.0986c.5727-.8469,1.2181-1.642,1.8719-2.428q.96-1.1543,1.9466-2.2862a12.4866,12.4866,0,0,0-1.0551,2.2024,8.4194,8.4194,0,0,0-.476,1.9091,4.3,4.3,0,0,0,.262,2.1957,3.5242,3.5242,0,0,0,1.9552,1.8407,5.0891,5.0891,0,0,0,1.8939.3019A14.0442,14.0442,0,0,0,14.88,24.795c1.09-.25,2.1745-.5251,3.2538-.8187C24.7215,22.1838,44.5,16.8589,44.5,16.8589S21.6463,26.68,13.9871,29.8559Z
        "
        color='#ff6452'
        style={{ backgroundColor: '#fff', width: '60px' }}
        className='animate__animated animate__flash animate__infinite	infinite animate__slower '
      />
    </CartProvider>
  );
}
export default CartPage