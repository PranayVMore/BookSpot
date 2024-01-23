import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'


const ScrollToTop = ({children}) => {
    const location = useLocation();
    // console.log(location);

    useEffect(()=>{
        window.scrollTo(0,0)
    },[location.pathname])

  return (
    <div>
        {children}
    </div>
  )
}

export default ScrollToTop