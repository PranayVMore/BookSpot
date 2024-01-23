import React, {useState,useEffect, useContext }from 'react'
import "./DetailSection.css"
// useParams hook
import { useParams,useNavigate } from 'react-router-dom'
import {BookData} from "../../../Pages/dynamic-data/DynamicData"
import { UserContext } from '../../../App'
import { CartContext } from '../../../App'



const DetailSection = () => {
  const {id} = useParams()
  const [bookData, setbookData] = useState({})
  // console.log(id);

  const user = useContext(UserContext)
  const {cartItems,setcartItems} = useContext(CartContext)
  const navigate = useNavigate();

  useEffect (()=>{
    let newData = BookData.filter((book)=> book.id === parseInt(id));

    // console.log(newData[0]);
    setbookData(newData[0])
  },[id])


  const handleAddToCart = () =>{
    if(user){
      setcartItems([...cartItems,bookData])
      alert(`The book ${bookData.book_name} is added to cart`)
      // console.log(bookData);
      // console.log(user);
      // console.log(cartItems);
    }else{
      
     navigate("/login")
     alert("Log in or Sign Up First")
    }
  }
  return (
    <section className='detail-section-container'>
       <div className="container">
        <div className="flex-container">
            <div className="book-img-container">
                <img src={bookData.book_url} alt="book img" />
            </div>

            <div className="book-detail-container">
                <h2>{bookData.book_name}</h2>
                <h5 className='auther'> {bookData.auther_name} </h5>
                <g className='description'>{bookData.book_description}</g>
                <h6><b>Language</b>:{bookData.language}</h6>
                <h6><b>Book Length</b>:{bookData.print_length}</h6>
                <h3> &#8377; {bookData.price}</h3>

                <button onClick={handleAddToCart}  href="" className='cart-button'>Add to Cart</button>
            </div>
        </div>
       </div>
    </section>
  )
}

export default DetailSection