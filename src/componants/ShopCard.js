import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function ShopCard({name , open , close}) {
  return (
    <>
    <Card sx={{ maxWidth: 345 , marginBottom:"40px" , boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
      <CardMedia
        component="img"
        height="140"
        image="https://thumbs.dreamstime.com/z/shop-building-colorful-isolated-white-33822015.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography> 
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum 
        </Typography>
      </CardContent>
      <div style={{display:"flex" , justifyContent:"space-evenly"}}>
       <h4 size="small">Open : {open}</h4>
       <h4 size="small">Close : {close}</h4> 
        <h4>Status : <span>Open</span></h4>
      </div>
    </Card> 
    </>
  );
}
