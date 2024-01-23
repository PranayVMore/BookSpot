import React from 'react'
import "./SearchResultCard.css"
import { Link } from 'react-router-dom'


const SearchResultCard = ({bookData}) => {



   
  return (
    <section>
      
      <section className="cart-item">
                <div className="cart-item-img-container">
                    <img src={bookData.book_url} alt=""  className='cart-item-img'/>
                </div>
                <div className="cart-item-content-container">
                    <h2> {bookData.book_name}</h2>
                    <g > {bookData.auther_name}</g>
                    

                <Link to={`/book-details/${bookData.id}` } className="details-btn"> Details</Link>
                   
                </div>
            </section>

    </section>
  )
}

export default SearchResultCard
