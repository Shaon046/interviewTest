
import { signInWithPopup } from "firebase/auth";
import { googleAuthProvider,auth } from "./firebase";
import { database } from "./firebase";
import {set,ref } from "firebase/database";


const  SignupFunction=async(callback) => {
    try{
const result=await signInWithPopup(auth,googleAuthProvider);
localStorage.setItem('token',result.user.accessToken);
localStorage.setItem("user",JSON.stringify(result.user));

 let username=result.user.displayName
 let email=result.user.email

 let userData={
    name: username,email:email,score:null
 }
/////creating user in database
 registerUser(username,userData)

callback()
}catch(err){
  console.log(err)

}}


const registerUser=(key,data) => {
    set(ref(database,"user/"+ key), data);
   }









export {SignupFunction}