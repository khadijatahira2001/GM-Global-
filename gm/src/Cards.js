import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './CardStyle.css'
import Typography from '@mui/material/Typography';

import {  CardActionArea } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, height:400 ,marginLeft:10, marginTop:-10,padding:10 ,display:'flex'}} className='card1'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/images/card1.jpg"
          alt=""
        />
        <CardContent>
          <Typography  variant="h4" component="div">
            
          </Typography>
          <Typography variant="body2" >
            Building & Property
          </Typography>
        </CardContent>
      </CardActionArea>
     
     {/* {Another card} */}
     <CardActionArea sx={{marginleft:10}}>
        <CardMedia
          component="img"
          height="280"
          image="/images/card2.jpg"
          alt=""
        />
        <CardContent>
          <Typography  variant="h4" component="div">
            
          </Typography>
          <Typography variant="body2" >
            Infrastructure & Transportation
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
  );
}