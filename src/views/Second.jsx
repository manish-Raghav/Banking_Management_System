import React, { useState } from 'react'

  import Grid from '@mui/material/Grid';
  import TextField from '@mui/material/TextField';
  import InputLabel from '@mui/material/InputLabel';
  import FormControl from '@mui/material/FormControl';
  import OutlinedInput from '@mui/material/OutlinedInput';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import { useScrollTrigger } from '@mui/material';
  


const Second = ({step,setstep, arr ,setarr,sh ,setsh}) => {
    const[select,setselect] =useState();
    const myfun =()=>{
      setstep(3);
    }
    const mypre =()=>{
      setstep(1);
    }

  
    


  return (
    <div className='w-full h-full '>
    <div className='w-screen h-screen flex   flex-col bg-white my-10 '>
       <div className='flex  flex-row justify-center space-x-7'>
        <div>
        <TextField  label="Account  " variant="outlined" 
          value={arr['Account']}
          onChange={e=>setarr({...arr,'Account':e.target.value})}
         />
        </div>  
        <div>
        <TextField label="Email" variant="outlined" 

           value={arr['email']}
          onChange={e=>setarr({...arr,'email':e.target.value})}
        />
        </div>
        
         </div>




         <div className='flex  flex-row justify-center space-x-7 my-8'>
         <div className='w-64'>

        <FormControl className='w-64' >
        <InputLabel className='w-64' >Account_type</InputLabel>
        <Select
          
           value={arr['actype']}
           displayEmpty
          onChange={e=>setarr({...arr,'actype':e.target.value})}
         
          
        >
          <MenuItem  value={'current'}>Current</MenuItem>
          <MenuItem  value={'Savings'} >Saving</MenuItem>

        
          
        </Select>
      </FormControl>
       </div>



      <div>
     




      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel >Gender</InputLabel>
        <Select
         
        
         value={arr['Gender']}
           displayEmpty
          onChange={e=>setarr({...arr,'Gender':e.target.value})}
         
        >

           <MenuItem  value={'Male'}>Male</MenuItem>
          <MenuItem  value={'Female'} >Female</MenuItem>
          <MenuItem  value={'Othere'} >Othere</MenuItem>
          
       
        </Select>
      








      
    </FormControl>
    </div>
         </div>
         <div className='flex  flex-row justify-center space-x-7 '>
        <FormControl  className='w-96'  >
          <InputLabel >Amount</InputLabel>
          <OutlinedInput
            
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            value={arr['mamount']}
          onChange={e=>setarr({...arr,'mamount':e.target.value})}
          />
        </FormControl>
        </div>
        <div className='flex  flex-row justify-center space-x-4'>
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
          Next
        </Button> 
        </div>
      
     </div>
 </div>
  )
}

export default Second
