import React from 'react'
import "./BookPage.css"
import Navbar from "../../Components/Layouts/Navbar/Navbar"
import SearchInput from "../../Components/Form/SearchInput/SearchInput"
import AllProductList from '../../Components/Layouts/AllProductList/AllProductList'
import Footer from "../../Components/Layouts/Footer/Footer"

const Bookspage = () => {
  return (
    <section>
      <Navbar darkTheme={true}/>
      <div className="search-container">
        <h2>Finds Books that you want</h2>  
        <SearchInput darkTheme={false}/>
      </div>

      <AllProductList/>
      <Footer/>
    </section>
  )
}

export default Bookspage
