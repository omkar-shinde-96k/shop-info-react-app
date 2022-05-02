import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import {deleteShopAction} from "../Redux/actions/shopActions"

export function ShopCard({ id  , name, open, close }) {
  const dispatch = useDispatch();

  
  const d = new Date();
  let currentTime = d.getHours();

  console.warn("currentTime",currentTime)
 

  return (
    <>
      <Card className="card" sx={{ maxWidth: 345, margin: "15px 10px 20px 10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", padding: "0" }}>
        <div className="deleteIcon" onClick={() => {
          dispatch(deleteShopAction(id)) 
        }
        } ><DeleteIcon /></div>
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
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "0", padding: "0" }}>
          <h4 size="small">Open : {open}</h4>
          <h4 size="small">Close : {close}</h4>
          <h4>Status : {currentTime >= open && currentTime <= close ? <span style={{color:"green"}} >Open</span> :  <span style={{color:"red"}}>Close</span> } </h4>
        </div>
      </Card>
    </>
  );
}
