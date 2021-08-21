// store.js
import React, { createContext, useReducer } from "react";
import { ActionTypes } from "../constants/constants";

const INITIAL_DATA = {
  day: "",
  time: "",
  person: "",
  food: ""
};

const INITIAL_TABLE_DATA = {
  MON: {
    Lunch: {},
    Dinner: {}
  },
  TUE: {},
  WED: {},
  THU: {},
  FRI: {},
  SAT: {},
  SUN: {}
};

const initialState = {
  appName: "Planning App",
  currentData: INITIAL_DATA,
  tableData: INITIAL_TABLE_DATA
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ActionTypes.setTableData: {
        const { payload } = action;
        return { ...state, tableData: payload };
      }
      case ActionTypes.changeFormData:
        const {
          payload: { key, value }
        } = action;
        return {
          ...state,
          currentData: { ...state.currentData, [key]: value }
        };
      case ActionTypes.addItem:
        const { currentData } = state;
        const { time } = currentData;
        const currentDayData = state.tableData[currentData.day];
        return {
          ...state,
          currentData: { ...INITIAL_DATA },
          tableData: {
            ...state.tableData,
            [currentData.day]: { ...currentDayData, [time]: { ...currentData } }
          }
        };

      default:
        return state;
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
