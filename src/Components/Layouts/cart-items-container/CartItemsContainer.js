import React from 'react'
import "./CartItemsContainer.css"
import CartItemCard from '../../card/cart-item/CartItemCard'
import { useContext } from "react"
import {CartContext} from "../../../App"

const CartItemsContainer = () => {

    const {cartItems,totalAmout} = useContext(CartContext)
  
  return (
    <section className='cart-items-container'>
        <div className="container">
            {totalAmout === 0 ?(            
            <h2>cart is empty</h2>            
            ):(
                <React.Fragment>
                    <h2>cart</h2>
                    {cartItems.map((item) => (
                        <CartItemCard key={item.id} bookData={item}/>
                    ))}
                    
                    

                    <h3>Total Amount= &#8377;{totalAmout} </h3>

                    <button className='nav-links-btn'>Proceed to Chekout</button>
              

                </React.Fragment>
              )}

            {/* <h2>cart</h2>
            {cartItems.map((item) => (
                    <CartItemCard key={item.id} bookData={item}/>
                ))}
           
           <h3>Total Amount= &#8377;{totalAmout} </h3> */}
        </div>


    </section>
  )
}

export default CartItemsContainer
