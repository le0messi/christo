import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [value,setvalue]= useState(0)
    const plus = ()=>{
        setvalue(value+1)

    }
    const minus = ()=>{
        setvalue(value-1)

    }


  return (
    <div>
        <Typography>The value is {value}</Typography>
        <Button variant='contained' color='primary' onClick={plus}>+</Button>
        <Button variant='contained' color='error' onClick={minus}>-</Button>
      
      
    </div>
  )
}

export default Counter
