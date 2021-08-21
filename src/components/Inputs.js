import React, { useContext } from "react";
import { ActionTypes, Days, MealTime, Persons } from "../constants/constants";
import InputSelect from "./InputSelect";
import InputText from "./InputText";
import { store } from "../redux/store";
import AddButton from "./AddButton";
import Grid from "@material-ui/core/Grid";
import SaveOffline from "./SaveOffline";

export const Inputs = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const { day, time, person, food } = state.currentData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: ActionTypes.changeFormData,
      payload: { key: name, value }
    });
  };

  return (
    <Grid container spacing={1}>
      <Grid item sm={4} xs={12}>
        <InputSelect
          options={Days}
          label="Day"
          name="day"
          handleChange={handleChange}
          value={day}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <InputSelect
          options={MealTime}
          label="Time"
          name="time"
          handleChange={handleChange}
          value={time}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <InputSelect
          options={Persons}
          label="Person"
          name="person"
          handleChange={handleChange}
          value={person}
        />
      </Grid>
      <Grid item sm={12} xs={12}>
        <InputText
          handleChange={handleChange}
          value={food}
          name="food"
          label="Food"
          fullWidth
        />
      </Grid>
      <Grid container spacing={1}>
      <Grid item sm={4} xs={6}>
      <AddButton inputs={state.currentData} />
      </Grid>
      <Grid item sm={4} xs={6}>
      <SaveOffline />
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Inputs;
