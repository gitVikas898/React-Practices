import { useDispatch } from "react-redux";
import { GITHUB_API } from "../utils/constants"
import { useEffect } from "react";
import { addData } from "../utils/dataSlice";

export const useFetchdata=()=>{
    const dispatch = useDispatch();
    const getData = async()=>{
        const response = await fetch(GITHUB_API);
        const data = await response.json();
        console.log(data)
        dispatch(addData(data));
    }

    useEffect(()=>{
        getData();
    },[])
}