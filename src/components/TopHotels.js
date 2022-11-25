import { Container, Typography,Box } from '@mui/material'
import React from 'react'
import HotelsBox from './HotelsBox'
// import Typography from '@mui/material/Typography';

function TopHotels() {
  return (
    <Container>

       <Typography variant="h4">Top Hotels</Typography>
        
       <Box sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap-reverse'}}>     
        <HotelsBox/>
        <HotelsBox/>
        <HotelsBox/>
        <HotelsBox/>
        <HotelsBox/>
        <HotelsBox/>
        {/* <HotelsBox/>
        <HotelsBox/>
        <HotelsBox/> */}
        </Box>
      
    </Container>
  )
}

export default TopHotels