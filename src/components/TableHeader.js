import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const DataHeader = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Day</TableCell>
        <TableCell align="center">Time</TableCell>
        <TableCell align="center">Food</TableCell>
        <TableCell align="center">Person</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default DataHeader;
