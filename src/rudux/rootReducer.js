import { combineReducers } from "@reduxjs/toolkit";
import quizTimerSlice from "./slices/QuizTimerSlice";
import authSlice from "./slices/AuthenticationSlice";
import firebaseFunctionSlice from "./slices/FirebaseFunctionsSlices";


const rootReducer=combineReducers(
    {quiz:quizTimerSlice.reducer,
       // auth:authSlice.reducer,
         firebase:firebaseFunctionSlice.reducer
     }
)

export default rootReducer  
