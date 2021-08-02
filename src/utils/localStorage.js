import { weekly_plan } from "../config/store";
import _ from "lodash";


export const getData = async () => {
    try {
        const data = await localStorage.getItem("BB-FOOD");
        if (!_.isNull(data)) {
            const stored_data = JSON.parse(data);
            return stored_data;
        }
        return weekly_plan;
    }
    catch {
        throw new Error('There is error')
    }

}

export const setData = (data) => {
    localStorage.setItem("BB-FOOD", JSON.stringify(data))
}