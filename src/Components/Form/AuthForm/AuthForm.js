  import React,{useState} from 'react'
  import app from '../../../firebase/Firebase';
  import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

    const AuthForm = ({buttonName}) => {

      const [email, setEmail] = useState("");
      const [emailError, setEmailError] = useState('');
      const [password, setPassword] = useState("");
      const [passwordError, setPasswordError] = useState('')

      const [username, setuserName] = useState("");
      const navigate =useNavigate();

      const isValidEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
      
      const handleSubmit=(event)=>{
          event.preventDefault();
          const auth=getAuth(app);

          if(email === '' && password === '' && username === ''){
            alert('Please fill all the data')
          }
          else if(email === ''){
            setPasswordError('Email is empty')
          }
          else if(!isValidEmail(email)){
            alert('Provide valid email address')
          }
          else if(password === ''){
            alert('Password is empty')
          }
          else if(email === ''){
            setEmailError('Email is empty')
          }
         
          else if(password.length < 6){
            alert('Password should be greater than 6')
          }
        
          if(buttonName === 'Login'){
            signInWithEmailAndPassword(auth,email,password)

            .then(()=>{
              
                navigate("/")
            })
            .catch((err)=>{
              console.log(err);
            })
          }else{
            createUserWithEmailAndPassword (auth,email,password)
          .then((userCrendentialIs)=>{
            userCrendentialIs.user.displayName = username
              navigate("/")
          })
          .catch((err)=>{
            console.log(err);
          })
          }
          
      }
      return (
        <form onSubmit={handleSubmit}>
                {
                  buttonName ==='Sign up' && (
                    <div className="form-group">
                    <label >Username:</label>
                    <input 
                    type="text" 
                    className='form-input' 
                    placeholder='Enter your username '
      
                    value={username}
                    
                    onChange={(event)=> setuserName(event.target.value)} />
                </div>
                  )
                }

                <div className="form-group">
                    <label >Email:</label>
                    <input type="text"
                     className='form-input'
                      placeholder='Enter your email'
                      value={email}
                      autoComplete='off'
                      
        
                      onChange={(event)=>setEmail(event.target.value) } />
                      {emailError}
                </div>
                <div className="form-group">
                    <label >Password:</label>
                    <input type="password"
                     className='form-input'
                      placeholder='Enter your Password'
                      value={password}
                      autoComplete='off'
        
                      onChange={(event)=>setPassword(event.target.value) } />
                      {passwordError}
                </div>
                <div className="form-group">
                    <button 
                    className='form-submit'
                   value={buttonName} 
                     >Submit</button>
                </div>
        </form>
      )
    }
    
    export default AuthForm