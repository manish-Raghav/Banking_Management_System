import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';

const Alldt = ({step,setstep,arr ,setarr}) => {
    console.log(arr)
  const myfun = async()=>{
    
    await axios.post('http://localhost:4000/add',arr)
    .then(res=>{
      console.log(res.data);
    })
    .catch((e)=>{
      console.log("error is here ==>" , e);
    })
  }
  const mypre =()=>{
    setstep(2);
  }

  
  
  
   
  
  return (
    <div className='w-full h-full'>
       <div className='flex justify-center mt-8 '>
         <h1>Please Confermed all your data </h1>
       </div>
       <div className='flex flex-row w-full  border-2 border-x-rose-600 border-solid'>
     

     
     <div className='flex flex-col'>
     <table className='mx-4'>
  <tr  className='flex justify-start'>
     <th className='mx-32'>Entity</th>
       <th>values</th>
  </tr>
  <div className =' '>
  <tr>
   {arr['FirstName']}
   {arr['lastName']}
  </tr>
  <tr>
  {arr['Father_Name']}
  {arr['phone']}
  </tr>
  <tr>
  {arr['Address']}
  
  </tr>
  </div>
  
</table>
     </div>




     <div className='flex flex-col'>
     <table className='mx-4'>
  <tr  className='flex justify-start'>
     <th className='mx-32'>Entity</th>
       <th>values</th>
  </tr>
  <div className =' '>
  <tr>
  {arr['acname']}
  {arr['mamount']}
  </tr>
  <tr>
     {arr['actype']}
     {arr['Gender']}
  </tr>
  <tr>
  {arr['email']}
   
  </tr>
  </div>
  
</table>
     </div>


     <div >
        <Button
          varient="contained"
          color="primary"
          onClick={mypre}
        >
        
          Back
        </Button>
        <Button
          varient="contained"
          color="secondary"
         onClick={myfun}
        >
          Conferm
        </Button> 
        </div>



     </div>
    </div>
  )
}

export default Alldt
