import React from 'react'
import Showcase from "../../Components/Layouts/Showcase/Showcase"
import Productlisting from '../../Components/Layouts/Productlisting/Productlisting'
import Footer from '../../Components/Layouts/Footer/Footer'
const HomePage = () => {
  return (
    <section>
      <Showcase/>
      <Productlisting/>
      <Footer/>
    </section>
  )
}

export default HomePage
