import React from 'react'
import { auth } from '../../api/firebase'
import { signOut } from 'firebase/auth'



const SignoutButton = () => {

const onClickHandler=()=>{
  console.log("signout");
  signOut(auth)
}


  return (
    <div>
        <button onClick={()=> onClickHandler()}>signOut</button>
    </div>
  )
}

export default SignoutButton