import React from 'react'
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

const HomePage = () => {
  return (
    <CartProvider>
        <NavBar/>
        <Header/>
        <Popular/>
        <Carousel/>
        <New/>
        <Sale/>
        <Testimonials/>
        <Suscribe/>
        <Footer/>
    </CartProvider>
  )
}

export default HomePage