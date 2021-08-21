import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const DataRow = ({ row, day }) => {
  const { Lunch, Dinner } = row;
  return (
    <>
      <TableRow key={row.name}>
        <TableCell component="th" scope="row" rowSpan={2}>
          {day}
        </TableCell>
        {}
        <TableCell align="center">{"Lunch"}</TableCell>
        <TableCell align="center">{Lunch?.food || "-"}</TableCell>
        <TableCell align="center">{Lunch?.person || "-"}</TableCell>
      </TableRow>
      <TableRow key={row.name}>
        <TableCell align="center">{"Dinner"}</TableCell>
        <TableCell align="center">{Dinner?.food || "-"}</TableCell>
        <TableCell align="center">{Dinner?.person || "-"}</TableCell>
      </TableRow>
    </>
  );
};

export default DataRow;
