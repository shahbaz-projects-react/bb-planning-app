import React,{useState,useEffect} from "react";
import FoodDropdown from "./FoodDropdown";
import PlaceDropdown from "./PlaceDropdown";

const RowComponent = ()=>{

  const [foodsSelected,setFoodsSelected] =  useState([]);
  const [placeSelected,setPlaceSelected] =  useState([]);

  useEffect(()=>{
    console.log(foodsSelected,placeSelected);
  },[foodsSelected,placeSelected]);


  return (
  <div style={{display:"flex","flexDirection":"row"}}>
    <FoodDropdown setFoodsSelected={setFoodsSelected} />
    <PlaceDropdown setPlaceSelected={setPlaceSelected}/>
  </div>
);
}
  

export default RowComponent;
