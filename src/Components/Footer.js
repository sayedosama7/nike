/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
  return (
    <div>

      <footer class="text-center text-lg-start text-dark wow fadeInUp">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className='d-block m-auto'>
            <a href="" class="me-4 text-info">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="" class="me-4 text-info">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-info">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-info">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-info">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-info">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section>
          <div class="container text-center text-md-start">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto">
                <h6 class="text-uppercase fw-bold mb-4 text-danger">
                  nike shoes
                </h6>
                <p>
                  We champion continual progress for athletes and sport by taking action to help athletes reach their potential. Every job at NIKE, Inc. is grounded in a team-first mindset, cultivating a culture of innovation and a shared purpose to leave an enduring impact.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                <h6 class="text-uppercase fw-bold mb-4 text-danger">
                  Products
                </h6>
                <p>
                  <a href="#!" class="text-dark">sports</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">boots</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">sneakers</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">slippers</a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
                <h6 class="text-uppercase fw-bold mb-4 text-danger">Contact</h6>
                <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  sayedosama088@gmail.com
                </p>
                <p><i class="fas fa-phone me-3"></i> 01210304516</p>
                <p><i class="fas fa-print me-3"></i> 01030608819</p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center text-danger pb-4">
          © 2024 Copyright :
          <span class="text-info fw-bold mr-1"> sayed osama</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer