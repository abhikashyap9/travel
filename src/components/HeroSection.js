import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Searchbox from './Searchbox';
import DatePicker from './DatePicker'
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height:800
  }));
const styles = {
    paperContainer: {
        backgroundImage: `url('https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=1060&t=st=1669288659~exp=1669289259~hmac=9764df7e00a1e5a4bfd7104e4bc1f5696f6eb1effbc3a36910b4b82905386e29')`,
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
        backgroundSize: 'cover',
    }
};
function HeroSection() {
  return (
    <div>
    <Box
  sx={{
  
    height: 400,
    
    '&:hover': {
      backgroundColor: 'black',
    //   opacity: [1.0, 0.8, 0.7],
    },

  }}
  style={styles.paperContainer}
   >
  
   <Grid container spacing={2}>
  <Grid item xs={8} md={8} sx={{mx:'auto', marginTop:'200px',position:'relative'}}>
  
    <Item><Searchbox/><DatePicker/></Item>
    <Item><Button variant="contained" size='large'>Search</Button></Item>
  </Grid>

 
</Grid>
   </Box>
   </div>
  )
}

export default HeroSection