import React from 'react';
import './Cards.css'

const Cards = (props) => {
  // console.log(props.name)

  
  
  
  return  <div className='cards'>
    {props.name.map((el)=>{
   return <div className='card' >
   <img  style ={{width:'60px'}}src="https://cdn3.iconfinder.com/data/icons/flat-avatars-3/512/Flat_avatars_svg-05-512.png" alt="" />

   <div>
   <p>{el.name}</p>
   <p>{el.email}</p>
   <p>{el.date}</p>
   </div>
</div>
    })}
  </div>;
};

export default Cards;
