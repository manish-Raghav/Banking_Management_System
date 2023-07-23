import React, { useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';  


      
const First = ({step,setstep, arr ,setarr ,sh ,setsh}) => {
   
     
    const myfun = ()=>{
      setstep(2);
    }

    

   

  return (
    <div className='w-full h-full'>
    <div className=' flex  flex-row my-10 justify-center  '>
      <div className=''>
      <TextField  className='w-72'
          required
          id="outlined-required"
          label='FirstName'
          value={arr['FirstName']}
          onChange={e=>
          {
            setarr({...arr,'FirstName':e.target.value})
            if(!sh)
               e.target.rest
          }}
        />
      </div> 
      <div>
      <TextField className='w-72'
          required
          id="outlined-required"
          label='SecondName'
          value={arr['lastName']}
          onChange={e=>setarr({...arr,'lastName':e.target.value})}
        />
      </div> 
      </div>
      <div className=' flex  flex-row my-10 justify-center '>
         
      <div className=''>
      <TextField className='w-72'
          required
       
          label='Father Name'
          value={arr['Father_Name']}
          onChange={e=>setarr({...arr,'Father_Name':e.target.value})}
        />
      </div> 
      <div>
      <TextField className='w-72'
        
          label="Mobile_Number"
          type="number"
          value={arr['phone']}
          onChange={e=>setarr({...arr,'phone':e.target.value})}
        />
      </div> 
      </div>
       <div className='flex  flex-row my-10 justify-center '> 
      <TextField  className='w-96'
      
      label="Adress" 
       variant="filled" 
       value={arr['Address']}
          onChange={e=>setarr({...arr,'Address':e.target.value})}

       />


      
      </div>
     
      <div className='flex  flex-row my-10 justify-center '>
        <Button  variant="contained" onClick={myfun}>Next</Button>
       </div>
    </div>
  )
}

export default First
