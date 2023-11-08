import { Link } from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';

function NavBar() {
  const { totalItems } = useCart();
  return (
    <CartProvider>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <Link className="brand mt-2 mt-lg-0 d-flex  wow fadeInUp" to="/">
            <img
              src="images/logo.jpg" alt="Logo" loading="lazy" />
            <h1>nike shoes</h1>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">contact us</Link>
              </li>

            </ul>
            <ul className='navbar-nav ml-auto mb-2 mb-lg-0 align-items-center wow fadeInUp'>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <button className='btn btn-danger fw-bold'>
                    sign in
                  </button></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link position-relative" to="/cart">
                  <i className="fas fa-cart-plus mx-2 fa-xl"></i>
                  <span className='position-absolute'>{totalItems}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </CartProvider>

  );
}

export default NavBar;