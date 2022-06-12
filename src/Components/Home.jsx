import React from 'react'
import "../Components/Home.css"
import {Link} from "react-router-dom"

 
export const Home = () => {
    
  return (

    <div className='homediv'>
        <div className='mainbox'>
         <h1>JS News</h1>
         <Link  to="/" className="txt1">
            TopStories
          </Link>
          <Link  to="/new" className="txt1">
            NewStories
          </Link>
          <Link  to="/best" className="txt1">
            BestStories
          </Link>
        </div>
        
    </div>
  )
}
