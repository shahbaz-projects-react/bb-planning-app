import React, { useContext, useEffect } from "react";
import { ActionTypes, StorageKey } from "../constants/constants";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { store } from "../redux/store";

export const MainContainer = ({ children }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const getLocalData = async () => {
    const data = await localStorage.getItem(StorageKey);
    if (data)
      dispatch({ type: ActionTypes.setTableData, payload: JSON.parse(data) });
  };
  useEffect(() => {
    getLocalData();
  }, []);
  return (
    <Container maxWidth="sm">
      <Box my={4}>{children}</Box>
    </Container>
  );
};

export default MainContainer;
