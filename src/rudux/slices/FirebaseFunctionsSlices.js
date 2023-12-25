import { createSlice } from "@reduxjs/toolkit";
import { auth,googleAuthProvider } from "../../api/firebase";
import { signInWithPopup } from "firebase/auth";
import {set,ref } from "firebase/database";
import { database } from "../../api/firebase";
import { onAuthStateChanged } from "firebase/auth";


const functions={
    login:async(callback) => {
        try{
    const result=await signInWithPopup(auth,googleAuthProvider);
    localStorage.setItem('token',result.user.accessToken);
    localStorage.setItem("user",JSON.stringify(result.user));
    console.log(result);
    callback()
    }catch(err){
      console.log(err)
    }},

    ///not useful
putUser:(key,data) => {
    set(ref(database,"user/"+ key), data);
   }
,

}










const firebaseFunctionSlice=createSlice({
    name:"firebaseFunction",
    initialState:functions,
    reducers:{}
})

export default firebaseFunctionSlice