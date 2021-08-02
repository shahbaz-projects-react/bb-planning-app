import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { places } from "../config/place-items";

const PlaceDropdown = ({ setPlaceSelected, place }) => {

  const placeOptions = [];
  places.forEach((place) =>
    placeOptions.push({
      key: place, text: place, value: place
    }
    ));

  const selectItem = (e, data) => {
    setPlaceSelected(data.value);
  }

  return <Dropdown
    placeholder='Place'
    search
    selection
    value={place}
    options={placeOptions}
    onChange={selectItem} />
};

export default PlaceDropdown;