import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { food } from "../config/food-items";

const FoodDropdown = ({ setFoodsSelected, foods }) => {
  const itemTypes = Object.keys(food);
  const foodOptions = [];
  itemTypes.forEach((elem) => {
    foodOptions.push({
      key: elem, text: <b>{elem}</b>, value: elem
    })
    food[elem].forEach((innerElem) => {
      foodOptions.push(
        {
          key: innerElem, text: <li>{innerElem}</li>, value: innerElem
        }
      )
    });
  });

  const selectItem = (e, data) => {
    setFoodsSelected(data.value);
  }

  return <Dropdown
    placeholder='Food'
    multiple
    fluid
    search
    selection
    value={foods}
    options={foodOptions}
    onChange={selectItem}
  />
};

export default FoodDropdown;