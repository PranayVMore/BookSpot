import React from 'react'
import "./SearchInput.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchInput = ({darkTheme}) => {

  const [searchField, setSearchField] = useState('');
  const navigate = useNavigate ();

  const handleChage = (e)=>{
    setSearchField(e.target.value)
  
    
}

const searchResults = ()=>{
    if(searchField === ''){
      alert('Search field is empty')
    }else{
      navigate('/search',{state:searchField});
    }
} 
  return (
    <div className={`search-input-form-container ${darkTheme ? 'dark-box-shadow': 'light-box-shadow'}`}>
        <input type="text"
         className='search-input' 
         placeholder='Search Books'
         value={searchField}
         onChange={handleChage}
         
         />
        <button className='search-button' onClick={searchResults}>Search</button>
    </div>
  )
}

export default SearchInput