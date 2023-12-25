import { combineReducers } from "@reduxjs/toolkit";
import quizTimerSlice from "./slices/QuizTimerSlice";
import authSlice from "./slices/AuthenticationSlice";



const rootReducer=combineReducers(
    {quiz:quizTimerSlice.reducer,
       // auth:authSlice.reducer,
        
     }
)

export default rootReducer  
