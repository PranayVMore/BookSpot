import React from 'react'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import Footer from '../../Components/Layouts/Footer/Footer'
import CartItemsContainer from '../../Components/Layouts/cart-items-container/CartItemsContainer'
const CartPage = () => {
  return (
    <section>
      <Navbar darkTheme={true}/>

        <CartItemsContainer darkTheme={true}/>
      <Footer />
    </section>
  )
}

export default CartPage
