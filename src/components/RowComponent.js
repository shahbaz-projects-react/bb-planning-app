import React,{useState,useEffect} from "react";
import FoodDropdown from "./FoodDropdown";
import PlaceDropdown from "./PlaceDropdown";
import SaveButton from './SaveButton'
import {Table } from 'semantic-ui-react'

const RowComponent = ({day})=>{

  const [foodsSelected,setFoodsSelected] =  useState([]);
  const [placeSelected,setPlaceSelected] =  useState([]);

  useEffect(()=>{
  },[foodsSelected,placeSelected]);


  return (
  <Table.Row>
    <Table.Cell collapsing colSpan='1'>{day}</Table.Cell>
    <Table.Cell collapsing colSpan='4'><FoodDropdown setFoodsSelected={setFoodsSelected} /></Table.Cell>
    <Table.Cell collapsing colSpan='1'><PlaceDropdown setPlaceSelected={setPlaceSelected}/></Table.Cell>
    <Table.Cell collapsing colSpan='1'><SaveButton foods={foodsSelected} place={placeSelected} day={day}/></Table.Cell>
  </Table.Row>
);
}
  

export default RowComponent;
