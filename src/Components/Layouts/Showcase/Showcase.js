import React from 'react'
import "./Showcase.css"
import Navbar from "../Navbar/Navbar"
import SearchInput from '../../Form/SearchInput/SearchInput'

const Showcase = () => {
  return (
    <section className='showcase-container'>

        <Navbar/>
        <div className="overlay"></div>
        <div className="showcase-content">
            <h1>Best Books Are Available Here</h1>
            <p>Buy best book at best price</p>
            <SearchInput darkTheme={true}/>
        </div>
        
        </section>
  )
}

export default Showcase