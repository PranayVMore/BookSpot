import React from 'react'   
import './Login.css'
import SigninImg from "../../Assets/SignUp_Back.jpg"
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import AuthForm from '../../Components/Form/AuthForm/AuthForm'
const Login = () => {
  return (
    <>
      <Navbar darkTheme={true}/>
      <section className="login-container ">
        <div className="login-img-container">
          <img src={SigninImg} alt="" /> 
        </div>
        <div className="login-content-container">
            <div className="container">
            <div className="content-wrapper">
                <h2>Log in</h2>
                <g>Log in with email and password </g>

                <AuthForm buttonName="Login"/>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login