import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
// authenticate
import app from './firebase/Firebase';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
//component
import HomePage from "./Pages/Home/HomePage"
import BooksPage from "./Pages/Bookpage/Bookspage"
import BookDetailsPage from "./Pages/BookDetailsPage/BookDetails"
import SignUp from './Pages/Signup-Page/SignUp';
import Login from './Pages/LoginPage/Login';
import CartPage from './Pages/CartPage/CartPage';
import SearchPage from './Pages/searchPage/SearchPage';
import ScrollToTop from './Components/Scroll/ScrollToTop';

export const UserContext = createContext({});
export const CartContext = createContext([]);

function App() {
 
  const auth = getAuth(app)
  const [authenticatedUser, setAuthenticatedUser] = useState(null)
  const [cartItems, setcartItems] = useState([])
  const [totalAmout, setTotalAmount] = useState(0)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
          setAuthenticatedUser(user);
        }else{
          setAuthenticatedUser(null)
        }
    })
  },[auth])
  
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item)=>{
      total = total + parseInt (item.price);
      // console.log(item.price);
    })
  
    setTotalAmount(total);
    //  console.log(cartItems);
  },[cartItems, totalAmout])
 
  return (
    <ScrollToTop>
        <UserContext.Provider value={authenticatedUser}>
          <CartContext.Provider value={{cartItems,totalAmout,setcartItems}}>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/books' element={<BooksPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/search' element={<SearchPage/>}/>
                <Route path='/book-details/:id' element={<BookDetailsPage/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
              </Routes>       
          </CartContext.Provider>
        </UserContext.Provider>
    </ScrollToTop>       
  );
}

export default App;
