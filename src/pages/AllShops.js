import React from 'react' 
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ShopCard } from "../componants/ShopCard"
import { Dropdown } from '../componants/Dropdown';
import "../App.scss"

export const AllShops = () => { 
  const allShops = useSelector(state => state.shopReducer) || [];
  const allCategories = useSelector(state => state.categoryReducer) || [];
  const allAreas = useSelector(state => state.areaReducer) || [];
  const { searchKey } = useParams();
   
  const [AreaFilter, setAreaFilter] = React.useState("ALL");
  const [categoryFilter, setCategoryFilter] = React.useState("ALL");
  const [statusFilter, setStatusFilter] = React.useState("ALL");

  const handleAreaChange = (event) => {
    setAreaFilter(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const d = new Date();
  let currentTime = d.getHours();

  const FilterResult = allShops.filter((curr, index) => {
    if (AreaFilter !== "ALL") { 
      if (curr.area === AreaFilter) {
        return curr
      }
    } else {
      return curr
    }
  }).filter((curr)=>{
    if (categoryFilter !== "ALL") { 
      if (curr.category === categoryFilter) {
        return curr
      }
    } else {
      return curr
    }
  }).filter((curr)=>{
    if (statusFilter !== "ALL") { 
      if (statusFilter === "Open" && currentTime >= curr.open && currentTime <= curr.close) {
        return curr
      }

      if (statusFilter === "Close" && currentTime < curr.open && currentTime > curr.close) {
        return curr
      }

    } else { 
      return curr
    }
  }).filter((curr)=>{
    if (!searchKey) {
      return curr;
    } else if (curr.name.toLowerCase().includes(searchKey)){
      return curr; 
    }
  })

  return (
    <>
      <div className='filters'>
        <Dropdown name="Area" cb={handleAreaChange} value={AreaFilter} store={allAreas} />

        <Dropdown name="Category" cb={handleCategoryChange} value={categoryFilter} store={allCategories} />  

        <Dropdown name="Status" cb={handleStatusChange} value={statusFilter} store={[{name:"Open"},{name:"Close"}]} /> 

      </div>

      <div className='shops'>
        {
          FilterResult.length !== 0 ?
        FilterResult.map((curr) => {
          return <>
            <ShopCard key={curr.id} id={curr.id} name={curr.name} open={curr.open} close={curr.close} /> 
          </>
        }) : <h1>Shops Not Found</h1>
        }
      </div>
    </>

  )
}
