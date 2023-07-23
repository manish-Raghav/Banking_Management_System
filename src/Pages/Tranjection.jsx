import axios from 'axios';

import React, { useEffect, useState } from 'react'


const Tranjection = () => {
  const [arr ,setarr] = useState([]);
  useEffect(()=>{
       axios.get('http://localhost:4000/gettransactions')
       .then((data)=>{
          //console.log(data.data);
           setarr(data.data);

       }).catch((e) =>{
        console.log(e);
       })
  })
  return (
    <div className =' max-w-full max-h-full border-2' >
     {arr.map((val,ind)=>{
      return(
        <div className='my-28 ml-96 w-80 flex flex-row  justify-between' >
     
      <div className='text-xl font-serif'>
        <h4>{val.userone}</h4>
      </div>
      <div className='text-xl font-serif'>
      <h4> {val.usertwo}</h4>
      </div>
      <div className='text-xl font-serif'>
        <h4>{val.count}</h4>
      </div> 
      </div>
      )
     })}
     </div>
  )
}

export default Tranjection;
