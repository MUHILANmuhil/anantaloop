import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[]
}

const detailsSlice=createSlice({
    name:"dashboard",
    initialState,
    reducers:{
        addetail:(state,{payload})=>{
            state.data=payload;
        }
    }
});

export let {addetail} = detailsSlice.actions;
export let getdetails=(state)=>state.dashboard.data
export default  detailsSlice.reducer;