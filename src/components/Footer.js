import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <> 
      <Box sx={{backgroundColor:'#536b78',height:200}}>
         <Typography sx={{color:'white',textAlign:'center',paddingTop:'100px'}} variant='h5'>Book Now</Typography>
      </Box> 
    </>
  )
}

export default Footer