
import { signInWithPopup } from "firebase/auth";
import { googleAuthProvider,auth } from "./firebase";
import { database } from "./firebase";
import {set,ref } from "firebase/database";
import {getFirestore,collection,addDoc,doc,getDocs, getDoc} from 'firebase/firestore'
import { firebaseApp } from "./firebase";
import questions from '../assets/questions'
const  SignupFunction=async(callback) => {
    try{
const result=await signInWithPopup(auth,googleAuthProvider);
localStorage.setItem('token',result.user.accessToken);
localStorage.setItem("user",JSON.stringify(result.user));

 let username=result.user.displayName
 let email=result.user.email
 let date=Date.now()

 let userData={
    name: username,email:email,date:date,score:null
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



   const addQuestions=async()=>{

const fireStore=getFirestore(firebaseApp)
try{
  for (const question of questions) {
    await addDoc(collection(fireStore,"questions"), question);
  }}
catch(err){
  console.log(err)
}

   }

const getQuestions=async ()=>{
try{
const fireStore=getFirestore(firebaseApp)
const collectionRef = collection(fireStore, "questions")

const snap = await getDocs(collectionRef);
const data = snap.docs.map((doc) => ({
  id: doc.id,...doc.data(),
}));
return data
}
catch(err){
  console.log(err)
}
  
  }


 


// const getQuestionById=()=>{
//   const fireStore=getFirestore(firebaseApp)

// const collectionRef=collection(firebaseApp,"questions")

// }







export {SignupFunction,addQuestions,getQuestions}