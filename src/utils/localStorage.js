import {weekly_plan} from "../config/store";
import _ from "lodash";


export const getData = ()=>{
    const data = localStorage.getItem("BB-FOOD");
    if(!_.isNull(data)){
        const stored_data = JSON.stringify(JSON.parse(data));
        return stored_data;
    }
   return data;
} 

export const setData = ()=>{
    localStorage.setItem("BB-FOOD",JSON.stringify(weekly_plan))
}