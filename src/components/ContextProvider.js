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
        getData().then(data => setStore(data)).catch(err => console.log('Errrrrorr', { err }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <AppContext.Provider value={{ store, updateStore }}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;