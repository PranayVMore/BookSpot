import React,{useContext} from 'react'
import "./CartitemCard.css"
import { CartContext } from '../../../App'

const CartItemCard = ({bookData}) => {

    const {cartItems,setcartItems} = useContext(CartContext)

    const handleRemove = ()=>{
        setcartItems(cartItems.filter((item)=> item.id !== bookData.id));
    }
  return (
    <section>
      
      <section className="cart-item">
                <div className="cart-item-img-container">
                    <img src={bookData.book_url} alt=""  className='cart-item-img'/>
                </div>
                <div className="cart-item-content-container">
                    <h2> {bookData.book_name}</h2>
                    <g > {bookData.auther_name}</g>
                    <h4 className='cart-item-price'> &#8377;{bookData.price}</h4>

                    <button onClick={handleRemove} className='remove-btn'>Remove </button>
                </div>
            </section>

    </section>
  )
}

export default CartItemCard
