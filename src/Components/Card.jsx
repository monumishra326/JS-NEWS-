import React from 'react'
import "./Card.css"
 const Card = ({image,title,by,time,score}) => {
  return (
    <div className='card' id='cardhead'>
        <div className='cardimg'>
       <img src={image} alt="" />
        </div>
        <div className='carddata'>
         <h3 className='h33'>title:{title}</h3>
         <div className='pdiv'><p>By:{by}</p>
         <p>Time:{time}</p>
         <p>Score:{score}</p>
         </div>
        </div>


    </div>
    
  )
}

export default Card;