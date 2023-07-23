

  import { styled } from '@mui/material/styles';
  import Box from '@mui/material/Box';
  import Paper from '@mui/material/Paper';
  import Grid from '@mui/material/Grid';
  import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
  import TextField from '@mui/material/TextField';
import First from '../views/First';

import Alldt from '../views/Alldt';
import Footer from '../Component/Footer';


import Second from '../views/Second';
import { useState ,createContext } from 'react';
//import Stepcontrol from './Stepcontrol';



//  export const Manish = createContext();

//   const Myse =()=>{
//     const [step ,setstep] = useState(3);
//     const [arr,setarr] = useState([]);
//     const [mine , setmy] = useState([]);
//     return(
//       <Manish.Provider value={{step ,setstep,arr,setarr,mine,setmy}}>
//       <NewAccount />
//   </Manish.Provider>  
//     );
//   }



const NewAccount = () => {
   
 
// const context = useContext(Stepcontrol);
// const {step ,setstep,arr,setarr,mine,setmy}  = context ?? {};
//   console.log(step);
const [step ,setstep] = useState(1);
const [arr,setarr] = useState({});
 const [sh ,setsh] =useState(true);       
      const showstep =(stp) =>{
        switch(stp){
          case 1:
          return <First step ={step}  setstep={setstep} arr={arr} setarr={setarr} sg={sh} setsh={setsh} />
          case 2:
            return <Second step ={step}  setstep={setstep} arr={arr} setarr={setarr} sg={sh} setsh={setsh}  />
          case 3:
            return <Alldt step ={step}  setstep={setstep} arr={arr} setarr={setarr} sg={sh} setsh={setsh} /> 
        }

      }


         
  
  return (
    
    
    <div className =' max-w-full max-h-full border-2 ' >
     <div className='my-28 w-screen' >
           
     
     <Stepper className='w-3/6 mx-80 border-2 border-red-700 border-solid' activeStep={step} orientation='horizontal' >
        <Step >
          <StepLabel ><h1 className='text-lg' >Personal Details</h1></StepLabel>
        </Step>
        <Step>
          <StepLabel><h1 className='text-lg'>Bank Details</h1></StepLabel>
        </Step>
        <Step>
          <StepLabel><h1 className='text-lg'>Confirmation</h1></StepLabel>
        </Step>


        </Stepper>
       {showstep(step)   }
       
      
     </div>
     
     <Footer />   
  </div>
  
 


)
}

export default NewAccount;   



    // <div>
    //      {error ? <Alert severity="error">Please fill all the details</Alert> : null }
    //   <Grid container>
     
    //     <Grid item xs={6}>
    //       <TextField
    //         className="feilds"
    //         label="First Name"
    //         type="text"
    //         color="white"
            
    //       />

    //       <TextField style={{outline:'none'}}
    //         label="Address"
    //         // outline="none"
    //         color="secondary"
    //         // onChange={(e) =>
    //         //   setUserData({ ...userData, Address: e.target.value })
    //         // }
    //         // value={userData["Address"]}
    //       />
    //       <TextField
    //         label="Phone Number"
    //         id="standard-start-adornment"
    //         // onChange={(e) =>
    //         //   setUserData({ ...userData, Phone: e.target.value })
    //         // }
    //         // value={userData["Phone"]}
    //         InputProps={{
    //           startAdornment: (
    //             <InputAdornment position="start">+91</InputAdornment>
    //           ),
    //         }}
    //       />
    //     </Grid>
    //     <Grid items xs={6}>
    //       <FormControl>
    //         <TextField
    //           label="Last Name"
    //           color="secondary"
    //           // onChange={(e) =>
    //           //   setUserData({ ...userData, lastName: e.target.value })
    //           // }
    //           // value={userData["lastName"]}
    //         />
    //         <FormLabel>Gender</FormLabel>
    //         <MuiRadioGroup
    //           onChange={(e) =>
    //             setUserData({ ...userData, gender: e.target.value })
    //           }
    //           value={userData["gender"]}
    //           row={true}
    //         >
    //           <FormControlLabel value="male" control={<Radio />} label="Male" />
    //           <FormControlLabel
    //             value="female"
    //             control={<Radio />}
    //             label="Female"
    //           />
    //         </MuiRadioGroup>
    //       </FormControl>
    //       <TextField
    //         type="date"
    //         color="secondary"
    //         // onChange={(e) => setUserData({ ...userData, DOB: e.target.value })}
    //         // value={userData["DOB"]}
    //       />
    //       {/* <FormControl>
    //         <InputLabel>Label</InputLabel>
    //         <MuiSelect>
    //           <MenuItem>none</MenuItem>
    //           <MenuItem>none</MenuItem>
    //           <MenuItem>none</MenuItem>
    //           <MenuItem>none</MenuItem>
    //         </MuiSelect>
    //       </FormControl> */}
    //     </Grid>
    //     <Button varient="contained" color="secondary" >
    //       Next
    //     </Button>
    //   </Grid>
    // </div>
  
  







