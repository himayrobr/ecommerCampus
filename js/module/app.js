import {headers} from "../components/env.js";
export const getAllProductName = async({search:text} = {search:"phone"})=>{
    console.log("Esperando ......");
    const url ='https:'
    const options = {
        method: 'GET'
        headers
    };
    let res= await fetch(url, options);
    let data = res.json();
    return data ;
}