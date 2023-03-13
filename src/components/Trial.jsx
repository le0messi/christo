import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Trial = () => {
    var [pagename,setpagename]=useState("Home Page");
    const gallerypage = ()=>{
        setpagename("Gallery page")
    }
    const homepage = ()=>{
        setpagename("Home page")
    }
    const contactpage = ()=>{
        setpagename("Contact page")
    }
  return (
    <div>
        <Button variant='contained' color='primary' onClick={homepage}>Home page</Button>
        <Button variant='contained' color='error' onClick={gallerypage}>Gallery page</Button>
        <Button variant='contained' color='success' onClick={contactpage}>Contact page</Button>
       <Typography>welcome to {pagename}</Typography>
      
      
    </div>
  )
}

export default Trial
