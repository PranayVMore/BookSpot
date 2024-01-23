import React ,{useState,useEffect}from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import Footer from '../../Components/Layouts/Footer/Footer'
import "./SearchPage.css"
import { BookData } from '../dynamic-data/DynamicData'
import SearchResultCard from '../../Components/card/search_result_card/SearchResultCard'

const SearchPage = () => {
    const location = useLocation()
    console.log(location);
    const [searchResult, setsearchResult] = useState([])
    useEffect (()=>{
        let searchValue =[];

        searchValue = BookData.filter((data)=> data.book_name.toLocaleLowerCase().includes(location.state.toLowerCase()));

        setsearchResult(searchValue)
    },[location.state])
  return (
    <section>
      <Navbar darkTheme={true}/>

        <div className="serach-result-container">
            <div className="container">
                <h2>Your Search Result</h2>
                  {searchResult.map((result)=>(
                    <SearchResultCard key={result.id} bookData={result}/>
                  ))}
            </div>
        </div>
    <Footer />
    </section>
  )
}

export default SearchPage
