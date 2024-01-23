import React from 'react'
import "./Footer.css"
import { useForm } from '@formspree/react';

const Footer = () => {
    const [state, handleSubmit] = useForm("xoqgvjpn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='footer-container'>
        <div className="container">
            <h2>For Any Queries</h2>
            <form className='footer-form' action="https://formspree.io/f/xoqgvjpn"method="POST">
                <div className="form-group">
                    <label htmlFor="name" className='form-label'>Name:</label>
                    <input type="text" name='name' id="name" className='form-input' required placeholder='Enter your name ' />
                </div>

                <div className="form-group">
                    <label htmlFor="email"  className='form-label' >Email Id:</label>
                    <input type="email" name='email' id="email" className='form-input'required placeholder='Enter your email'/>

                </div>

                <div className="form-group">
                    <label htmlFor="query" className='form-label' >Query:</label>
                   <textarea className='form-input' id="query" placeholder='Type your query'></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" disabled={state.submitting} className='form-submit' onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>

            <p> &copy; 2023 BookSpot. All right reserved </p>
        </div>
      
    </div>
  )
}

export default Footer
