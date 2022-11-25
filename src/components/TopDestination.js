import { Container, Typography } from '@mui/material'
import React from 'react'
import Slider from './Slider'

// const container

function TopDestination() {
  return (
    <>
      <Container sx={{marginTop:'80px'}}> 
        <Typography variant="h4" >
         Top Destinations
        </Typography>
        <Slider/>
        </Container>
    </>
  )
}

export default TopDestination