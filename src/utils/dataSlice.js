import { createSlice } from "@reduxjs/toolkit";
const dataSlice = createSlice({
    name:"user",
    initialState:{
        bio:null
    },
    reducers:{
        addData:(state,action)=>{
            state.bio = action.payload;
        }
    }
});
export const {addData} = dataSlice.actions;
export default dataSlice.reducer;