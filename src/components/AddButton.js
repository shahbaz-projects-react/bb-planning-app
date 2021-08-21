import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { store } from "../redux/store";
import { ActionTypes } from "../constants/constants.js";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    maxWidth: theme.spacing(20),
    backgroundColor: "orange"
  }
}));

export const AddButton = ({ inputs = {} }) => {
  const classes = useStyles();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleAdd = () => {
    dispatch({ type: ActionTypes.addItem });
  };

  const disableButton = () => {
    return !Object.keys(inputs).every((item) => inputs[item] !== "");
  };

  return (
    <Button
      variant="contained"
      className={classes.button}
      startIcon={<AddIcon />}
      onClick={handleAdd}
      disabled={disableButton()}
    >
      Add Item
    </Button>
  );
};

export default AddButton;
