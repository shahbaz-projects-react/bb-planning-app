import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { store } from "../redux/store";
import DataRow from "./TableRow";
import DataHeader from "./TableHeader";

const useStyles = makeStyles(theme=>({
  table: {
    minWidth: 550,
    marginTop:theme.spacing(2)
  }
}));

export const DataTable = () => {
  const classes = useStyles();
  const globalState = useContext(store);
  const {
    state: { tableData }
  } = globalState;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <DataHeader />
        <TableBody>
          {Object.keys(tableData).map((row) => (
            <DataRow row={tableData[row]} day={row} key={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
