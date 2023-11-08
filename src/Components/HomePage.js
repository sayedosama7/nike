import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Popular from './Popular'
import { CartProvider } from 'react-use-cart'
import Carousel from './Carousel'
import New from './New'
import Sale from './Sale'
import Testimonials from './Testimonials'
import Suscribe from './Suscribe'
import Footer from './Footer'
import ScrollToTop from 'react-scroll-to-top'
import { useLocation } from 'react-router'

const HomePage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <CartProvider>
      <NavBar />
      <Header />
      <Popular />
      <Carousel />
      <New />
      <Sale />
      <Testimonials />
      <Suscribe />
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

export default HomePage