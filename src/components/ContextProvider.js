import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import {  createContext, useEffect, useState,useCallback } from "react";
import {weekly_plan} from '../config/store'

export const AppContext = createContext();

const ContextProvider = ({children}) => {
    const [store, setStore]= useState({});
    
    useEffect(()=>console.log('Store updated',store),[store])

    const updateStore = useCallback((...args) => {
        const [foods, place, day] = args;
        const selectedDay = get(store,day,{});
        if(!isEmpty(selectedDay)){
            const newStore = {...store, [day]:{...selectedDay,foods, place}};
            setStore(newStore)
        }
      }, []);
    

    useEffect(()=>{
        setStore(weekly_plan)
    },[])

    return (
        <AppContext.Provider value={{store, updateStore}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;