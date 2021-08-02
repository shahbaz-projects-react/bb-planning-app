import React, { useState, useEffect, useContext } from "react";
import FoodDropdown from "./FoodDropdown";
import PlaceDropdown from "./PlaceDropdown";
import AddButton from './AddButton'
import { Table } from 'semantic-ui-react'
import { AppContext } from '../components/ContextProvider'
import get from 'lodash/get'

const RowComponent = ({ day }) => {
  const { store } = useContext(AppContext);
  const [foodsSelected, setFoodsSelected] = useState([]);
  const [placeSelected, setPlaceSelected] = useState([]);

  useEffect(() => {
    const dayWiseData = get(store, day, null);
    if (dayWiseData) {
      const foods = get(dayWiseData, 'foods', []);
      const place = get(dayWiseData, 'place', '');
      setFoodsSelected(foods);
      setPlaceSelected(place)
    }
  }, [day, store]);


  return (
    <Table.Row>
      <Table.Cell collapsing colSpan='1'>{day}</Table.Cell>
      <Table.Cell collapsing colSpan='4'><FoodDropdown setFoodsSelected={setFoodsSelected} foods={foodsSelected} /></Table.Cell>
      <Table.Cell collapsing colSpan='1'><PlaceDropdown setPlaceSelected={setPlaceSelected} place={placeSelected} /></Table.Cell>
      <Table.Cell collapsing colSpan='1'><AddButton foods={foodsSelected} place={placeSelected} day={day} /></Table.Cell>
    </Table.Row>
  );
}


export default RowComponent;
