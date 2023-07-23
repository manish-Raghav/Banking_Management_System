import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Transfer from '../views/Transfer';
import { data } from 'autoprefixer';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const Custumer = () => {
   const [all ,setall] = useState([]);
   const [tr, settr] = useState(false);

  
   const [show, setShow] = useState(false);

  



   useEffect(()=>{
      axios.get('http://localhost:4000/customers').then(data  => {
        
        console.log(data.data);  
        setall(data.data); 
        // setall(...all,...response.data);
      })
      .catch(error =>{
        console.log(error);
      })
      
    },[])
    
    const handleClickOpen = () => {
      setShow(true);
    };
  
    const handleClose = () => {
      setShow(false);
    };
    

   
  return (
    <div className='max-h-full max-w-full  border-2  border-y-teal-900 '>

    { all.map((val ,ind)=>{ 

      return(
      <div className='my-28 w-screen flex flex-row justify-between'>
        <div>
          <h4>{val.name}</h4>
        </div>
        <div>
        <h4> {val.amount}</h4>
        </div>
    
    <div >
    <Button variant="contained" onClick={handleClickOpen} >Tansfer</Button>
    
     
   <Dialog  open={show} onClose={handleClose}>
        <DialogTitle>Add Amount</DialogTitle>
        <DialogContent>
          
        <TextField
          type="number"
          margin="dense"
          variant="standard"
          fullWidth
        />
      <TextField
   
       label=" Enter Account Number"
          type="number"
          margin="dense"
          variant="standard"
          fullWidth
        />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Amount"
            type="number"
            
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
         
        </DialogActions>
      </Dialog>





   </div>

    
      





      </div>)
    }) }
   
    
  
    </div>
  )
}

export default Custumer






{/* <Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
  Close
</Button>
<Button variant="primary" onClick={handleClose}>
  Save Changes
</Button>
</Modal.Footer> */}




{/* <Modal 
          size='lg'
      // show={show} onHide={handleClose}
        //  isOpen = {show}
        isOpen = {show}
         toggle={() =>setShow(!show)}
      >



        <ModalHeader
        toggle={() =>setShow(!show)}>
          <Modal.Title>Add Amount</Modal.Title>
        </ModalHeader>


        <ModalBody>
          <form>
            
               <div>
                <label>Name</label>
                <input type='email' placeholder='Enter Email' />
               </div>
            


          </form>
        </ModalBody>
       
      </Modal> */}