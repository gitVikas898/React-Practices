import { useDispatch } from "react-redux";
import { GITHUB_API } from "../utils/constants"
import { useCallback, useEffect } from "react";
import { addData } from "../utils/dataSlice";

export const useFetchdata=()=>{

    const dispatch = useDispatch();

    const getData = useCallback( async()=>{

        try{
            const response = await fetch(GITHUB_API);
            if(!response.ok){
                throw new Error("Failed to Fetch Data");
            }
            const data = await response.json();

            console.log(data)

            dispatch(addData(data));
        }catch(error){
            console.error("Error Occured ",error)
        }
        
    },[dispatch])

    useEffect(()=>{
        getData();
    },[getData]);
}