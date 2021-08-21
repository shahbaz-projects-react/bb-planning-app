import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import Button from "@material-ui/core/Button";
import { StorageKey } from "../constants/constants";
import { store } from "../redux/store";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    minWidth: theme.spacing(21),
    maxWidth: theme.spacing(21),
    backgroundColor: "lightblue"
  }
}));

export const SaveOffline = ({ inputs = {} }) => {
  const classes = useStyles();

  const globalState = useContext(store);
  const {
    state: { tableData }
  } = globalState;

  const saveOffline = () => {
    localStorage.setItem(StorageKey, JSON.stringify(tableData));
  };

  return (
    <Button
      variant="contained"
      className={classes.button}
      startIcon={<SaveOutlinedIcon />}
      onClick={saveOffline}
    >
      Save Offline
    </Button>
  );
};

export default SaveOffline;
