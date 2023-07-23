import React from 'react'
import TextField from '@mui/material/TextField'
const Transfer = () => {
  return (
    <div className='max-h-full max-w-full  border-2  border-y-teal-900'>
      <div className=' border-2 border-red-500 border-solid  my-28'> 
      <div>
      <TextField
          id="standard-number"
          label="id1"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </div>

      <div>
      <TextField
          id="standard-number"
          label="id2"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </div>

      <div>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>

      </div>
    </div>
  )
}

export default Transfer
