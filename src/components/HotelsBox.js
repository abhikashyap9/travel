import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
function HotelsBox() {
  return (
    <>
 <Card sx={{ maxWidth: 345,marginTop:'20px' }} elevation={3} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?w=996&t=st=1669396385~exp=1669396985~hmac=de5d130b5e52f82ec883ee06a5f213b6fc2698e66584f5ecd4b340517956a603"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </>
  )
}

export default HotelsBox