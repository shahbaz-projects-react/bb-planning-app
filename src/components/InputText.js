import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export const InputText = ({ value, handleChange, ...rest }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      onChange={handleChange}
      value={value}
      variant="outlined"
      {...rest}
    />
  );
};

export default InputText;
