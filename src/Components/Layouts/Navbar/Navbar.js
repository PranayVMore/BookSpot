import React,{useContext} from 'react'
import "./NavbarStyle.css"
import { Link, useNavigate } from 'react-router-dom'
// import { useAuth0 } from "@auth0/auth0-react";
import {ReactComponent as Cart} from "../../../Assets/cart_icon.svg"
import { UserContext } from '../../../App'
import { getAuth,signOut } from 'firebase/auth'
import  app from '../../../firebase/Firebase'

const Navbar = ({darkTheme}) => {

  const user = useContext(UserContext);

  const auth = getAuth(app);

  const navigate = useNavigate

  const handleClick = ()=>{
    signOut(auth).then(()=>{
      navigate('/')
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const showSignUpAndLogin = (
    <nav className='nav-link-container'>
        <Link to="/" className={`${darkTheme ?'nav-links-dark':'nav-links'}`}>Home</Link>
        <Link to="/books" className={`${darkTheme ?'nav-links-dark':'nav-links'}`}>Books</Link>
        <Link to="/login" className={`${darkTheme ?'nav-links-dark':'nav-links'}`}>Log in</Link>
        <Link to="/signup" className={`${darkTheme ?'nav-links-dark':'nav-links'}`}>Sign up</Link>
        
    
    {/* &nbsp; &nbsp;
      { isAuthenticated && <g className='user-wel'> Hello. {user.name}</g> }
      {isAuthenticated ?(
        <button className='nav-links-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>):(
        <button className='nav-links-btn'onClick={() => loginWithRedirect()}>LogIn</button>
      )} */}

    </nav>
  )

  const showLogoutAndCart =(
    <nav className='nav-link-container'>
        <Link to="/" className={`${darkTheme ?'nav-links-dark':'nav-links'}`}>Home</Link>
        <Link to="/books" className={`${darkTheme ?'nav-links-dark':'nav-links'}`}>Books</Link>
        <Link to="/" onClick={handleClick} className={`${darkTheme ?'nav-links-dark':'nav-links'}`}>Log Out</Link>
        <Link to="/cart" className='cart-link'><Cart/> </Link>
    
    

    </nav>
  )
  // console.log(darkTheme);
  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  // const { user, isAuthenticated, isLoading } = useAuth0();

  
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    <section className={`navbar-container ${darkTheme ? 'background-dark relative':'background-transparent' }`}>
      <div className="container flex justify-between align-center ">
        <Link to="#" id='logo'>  
         Book<span className='text'>Spot</span>
        </Link>

        {user ? showLogoutAndCart : showSignUpAndLogin }
      </div>
    </section>
  )
}

export default Navbar
