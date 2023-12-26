import { combineReducers } from "@reduxjs/toolkit";
import quizSlice from "./slices/QuizSlice";
import  authSlice from "./slices/AuthenticationSlice";


const rootReducer=combineReducers(
    {quiz:quizSlice.reducer,
     auth:authSlice.reducer,
        
     }
)

export default rootReducer  
