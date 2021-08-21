import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1,0),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(1)
  }
}));

export const InputSelect = ({
  handleChange,
  value = "",
  label = "label",
  options,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl} fullWidth>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        label="Age"
        {...rest}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem value={option} key={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
