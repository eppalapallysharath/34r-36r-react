import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) =>{
    const [data, setData] = useState([])
    
    const fetch = ()=>{
        axios.get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        fetch()
    },[])
    return data;
}