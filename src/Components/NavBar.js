import { Link } from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';

function NavBar() {
  const { totalItems } = useCart();
  return (
    <CartProvider>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container wow fadeInUp">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <Link class="brand mt-2 mt-lg-0 d-flex" to="/">
            <img
              src="images/logo.jpg" alt="Logo" loading="lazy" />
            <h1>nike shoes</h1>
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/">home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">about</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">contact us</Link>
              </li>

            </ul>
            <ul className='navbar-nav ml-auto mb-2 mb-lg-0 align-items-center'>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  <button className='btn btn-danger fw-bold'>
                    sign in
                  </button></Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link position-relative" to="/cart">
                  <i class="fas fa-cart-plus mx-2 fa-xl"></i>
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