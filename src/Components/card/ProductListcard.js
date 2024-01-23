import React from 'react'
import "./ProductListCard.css"
import { Link } from 'react-router-dom'



const ProductListcard = ({ bookData}) => {
  return (
   <section>
        <div className="product-listing-card">
            <div className="product-listing-img-container">
                <img src={bookData.book_url} alt="product-listing-img" className='product-listing-img'/>
            </div>
            <div className="product-listing-details-container">
                <br />
                <h5>{bookData.book_name}</h5>
                < span className='auther-name'>{bookData.auther_name}</span>
                <br />
                < span className='pricing'>&#8377;{bookData.price}</span>
                
            </div>
            <div className="card-btn">
            <Link to={`/book-details/${bookData.id}`} className='product-listing-button'>Add To Cart</Link>
            </div>
        </div>   

    </section>
  )
}

export default ProductListcard