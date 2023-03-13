import React from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


const Login = () => {
  return (
    <div> 
         <h1>Christo</h1>
      
      <input placeholder='Username'/>
      <input type='password' placeholder='Password'/>
      <br/>
      <br/>
     
    <TextField label="Username" variant='outlined'/>
    <TextField label="Username" variant='standard'/>
    <br/>
    <Button variant='contained' color='secondary'>login</Button>
   
    


      
    </div>
  )
}

export default Login
