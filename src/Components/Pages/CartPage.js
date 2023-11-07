import { CartProvider, useCart } from "react-use-cart";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Cart() {
  const { cartTotal, emptyCart, isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();


  if (isEmpty) return <>
    <Container>
      <Row>
        <Col>
          <div className="empty-cart">
            <h2 className="text-danger mb-5">nike shoes</h2>
            <h3 className="my-3">Your cart is empty</h3>
            <p>You have no items in your basket. To buy one or more items, click "Add To Cart" under to the item.</p>
            <Link to='/'><button className="btn btn-outline-danger text-danger fw-bold btn-lg mt-3">back to home</button></Link>
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
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img src={item.image} alt="" />
                    <p className="text-dark">{item.name}</p>
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
                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>remove item</button>
              </Col>
            ))}
          </Col>

          <Col md='4 bg-white text-dark p-3 cart-right wow fadeInUp'>
            <h6>CART SUMMARY</h6>
            <hr className="text-muted" />

            <div className="d-flex justify-content-between">
              <h6>Subtotal</h6>
              <h6 style={{ color: "#af1919" }}>Total Price ( {cartTotal} $)</h6>
            </div>
            <hr className="text-muted" />
            <Link className="cart-btn" to='/contact'>
              <button className="btn btn-danger d-block w-100">CHECKOUT ( {cartTotal} $)</button>
              <button onClick={() => emptyCart()} className="btn btn-info d-block w-100 mt-3">delete all products</button>
            </Link>
          </Col>

        </Row>
      </Container>
    </>
  );
}

function CartPage() {
  return (
    <CartProvider>
      <NavBar />
      <div className="pt-5"></div>
      <div className="pt-5"></div>
      <Cart />
    </CartProvider>
  );
}
export default CartPage