import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { createContext, useEffect, useState } from "react";
import { getData } from "../utils/localStorage";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
    const [store, setStore] = useState({});

    useEffect(() => console.log('Store updated', store), [store])

    const updateStore = (...args) => {
        const [foods, place, day] = args;
        const selectedDay = get(store, day, {});
        if (!isEmpty(selectedDay)) {
            const newStore = { ...store, [day]: { ...selectedDay, foods, place } };
            setStore(newStore)
        }
    };

    useEffect(() => {
        setStore(getData())
    }, [])

    return (
        <AppContext.Provider value={{ store, updateStore }}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;