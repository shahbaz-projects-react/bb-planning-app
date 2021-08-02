import { weekly_plan } from "../config/store";
import _ from "lodash";


export const getData = () => {
    const data = localStorage.getItem("BB-FOOD");
    if (!_.isNull(data)) {
        const stored_data = JSON.parse(data);
        return stored_data;
    }
    return weekly_plan;
}

export const setData = (data) => {
    localStorage.setItem("BB-FOOD", JSON.stringify(data))
}