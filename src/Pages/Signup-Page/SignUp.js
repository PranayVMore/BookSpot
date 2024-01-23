import React,{useState} from 'react'   
import './SignUp.css'
import SigninImg from "../../Assets/SignUp_Back.jpg"
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import AuthForm from '../../Components/Form/AuthForm/AuthForm'

const SignUp = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");


  if(name === '' && number === '' && address === '' && city === '' && zip ===''){
    alert('Please fill all the data')
  }
  return (
  
    <>
      <Navbar darkTheme={true}/>
      <section className="signup-container">
        <div className="signup-img-container">
          <img src={SigninImg} alt="" /> 
        </div>
        <div className="signup-content-container">
            <div className="container">
            <div className="content-wrapper">
                <h2>Sign up</h2>
                <g>Create a new account with email and password </g>
                <form >
                      <div className="form-group">
                          <label >Full Name:</label>
                          <input type="text" 
                          className='form-input'  
                          value={name}
                          placeholder='Enter your full name'/>
                      </div>
                      
                      <div className="form-group">
                          <label >Moile No:</label>
                          <input type="number" 
                          className='form-input' 
                          value={number}

                           placeholder='Enter your phone number'/>
                      </div>
                      
                      <div className="form-group">
                          <label >Address:</label>
                          <input type='address' 
                          className='form-input' 
                          value={address}
                          
                          placeholder='Enter your address'/>
                      </div>
                      <div className="form-group">
                          <label >City:</label>
                          <input type='address' 
                          className='form-input' 
                          value={city}

                           placeholder='Enter your City'/>
                      </div>
                      <div className="form-group">
                          <label >Zip Code:</label>
                          <input type='number'
                           className='form-input' 
                          value={zip}

                            placeholder='Enter your Zip Code'/>
                      </div>
                
                </form>
                <AuthForm buttonName="Sign up"/>

            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default SignUp