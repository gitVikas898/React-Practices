import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"

const appStore = configureStore({
    reducer:{
        userStore:dataReducer
    }
})

export default appStore;
