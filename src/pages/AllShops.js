import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {ShopCard} from "../componants/ShopCard"
import "../App.scss"

export const AllShops = () => {
  const dispatch = useDispatch();
  const allshops = useSelector(state => state.shopReducer) || [];
  console.log(allshops)
  return (
    <div className='shops'> 
      {allshops.map((curr)=>{
        return <>
        <ShopCard key={curr.id} name={curr.name} open={curr.open} close={curr.close}/>
        {/* <ShopCard/> */}
        </>
      })}
    </div>
  )
}
 