import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import ChainSlice from "./ChainSlice";

const store = configureStore({
    reducer:{
        user:userSlice.reducer,
        chain:ChainSlice.reducer
    }
})

export default store