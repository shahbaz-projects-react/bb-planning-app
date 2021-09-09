import React, { useContext } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { store } from "../redux/store";
import { ActionTypes } from "../constants/constants";

const useStyles = makeStyles((theme) => ({
  firstLetter: {
    '&:first-letter': {
      fontWeight: 'bold',
      fontSize: theme.spacing(2),
      color: '#da0505d4'
    }
  }
}));


export const DataRow = ({ row, day }) => {
  const { Lunch, Dinner } = row;
  const classes = useStyles();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleUpdateData = (time) => {
    dispatch({ type: ActionTypes.setInputData, payload: time === 'Lunch' ? Lunch : Dinner });
  };
  return (
    <>
      <TableRow key={row.name}>
        <TableCell component="th" scope="row" rowSpan={2}>
          {day}
        </TableCell>
        { }
        <TableCell align="center">{"Lunch"}</TableCell>
        <TableCell align="center" role="presentation" onClick={() => Lunch?.food && handleUpdateData('Lunch')}>{Lunch?.food || "-"}</TableCell>
        <TableCell align="center" className={classes.firstLetter}>{Lunch?.person || "-"}</TableCell>
      </TableRow>
      <TableRow key={row.name}>
        <TableCell align="center">{"Dinner"}</TableCell>
        <TableCell align="center" role="presentation" onClick={() => Dinner?.food && handleUpdateData('Dinner')}>{Dinner?.food || "-"}</TableCell>
        <TableCell align="center" className={classes.firstLetter}>{Dinner?.person || "-"}</TableCell>
      </TableRow>
    </>
  );
};

export default DataRow;
