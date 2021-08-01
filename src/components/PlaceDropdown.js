import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {places} from "../config/place-items";

const PlaceDropdown = (props) => {

    const placeOptions = [];
    places.forEach((place) => 
    placeOptions.push({
        key:place , text: place, value: place 
      }
    ));

    const selectItem = (e,data)=>{
      props.setPlaceSelected(data.value);
    }

  return <Dropdown 
          placeholder='Place' 
          fluid 
          search
          selection 
          options={placeOptions} 
          onChange={selectItem}/>
};

export default PlaceDropdown;