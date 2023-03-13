import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [fname,setfname] = useState("Ceeeyez")
    const changename=()=>{
        setfname('Bsccs')
    }
  return (
    <div>
        <Typography variant='h6'>Welcome {fname}</Typography>
        <Button variant='contained' color='primary'onClick={changename}>Change Name</Button>
        <Button variant='contained' color='secondary'>CONFIRM</Button>
        <Button variant='contained' color='success'>LOGIN</Button>
        <Button variant='contained' color='errror'>EXIT</Button>
    </div>
  )
}

export default Statebasic
