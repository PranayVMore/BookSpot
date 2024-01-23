import React from 'react'
import"./AllProductList.css"
import ProductListcard from '../../card/ProductListcard'
// dynamic data route
import { BookData } from '../../../Pages/dynamic-data/DynamicData'
const AllProductList = () => {
   
  return (
    <section className='product-listing-all'>
        <div className="container">

         <div className="grid-container">
            {BookData.map((Allbooks)=>{
                return (
                    <div className="grid-item">
                    <ProductListcard  bookData={Allbooks}/>
                    </div>
                )
            })}
            
           
         </div>
        </div>

    </section>
  )
}

export default AllProductList