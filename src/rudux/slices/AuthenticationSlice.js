import {  createSlice } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:'auth',
    initialState:{
        userDetails:''  ,
        status:''
    },
    reducers:{getUserDetais(state,action){

state.userDetails=action.payload
    }}
    
    
})



export default authSlice
export const {getUserDetais}=authSlice.actions