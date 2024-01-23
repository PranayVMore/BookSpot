import React from 'react'
import "./ProductListing.css"
import ProductListcard from '../../card/ProductListcard'
import { BookData } from '../../../Pages/dynamic-data/DynamicData'
const Productlisting = () => {
  return (
    <div className='product-listing-container'> 
        <div className="container">
            <h2>Books you might like</h2>
            <div className="listing-container">
              {BookData.slice(0,4).map((book)=>(
                 <ProductListcard key={book.id} bookData={book}/>
              ))}
               
             
            </div>
        </div>
      
    </div>
  )
}

export default Productlisting
