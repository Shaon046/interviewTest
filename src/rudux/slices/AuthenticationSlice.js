import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { ref, set } from "firebase/database";






const registerUserWithGoogle=createAsyncThunk("registerUserWithGoogle",async()=>{
    const dummy=fetch("https://dummyjson.com/products/1")

    return dummy.json();

})



const authSlice=createSlice({
    name:"auth",
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(registerUserWithGoogle.fulfilled,(state,action)=>{
                state.isLoading=false; 
                state.data=action.payload                 ///////user
            });

            builder.addCase(registerUserWithGoogle.pending,(state,action)=>{
state.isLoading=true;})
   
            builder.addCase(registerUserWithGoogle.rejected,(state,action)=>{
                state.isError=true
            })




}
})


export {registerUserWithGoogle}
export default authSlice













