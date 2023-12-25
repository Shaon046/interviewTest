import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const quizInitialState = {
  timer: 0,
  timeOut: false,
};

// const startTimer=createAsyncThunk("startTimer",async()=>{
// let count=0

//     const  timerFunction=()=>{
//         const interval=setInterval(()=>{count++;if(count>4){clearInterval(interval)}},1000)}


// })




const quizTimerSlice = createSlice({
  name: "quizTimer",
  initialState: quizInitialState,
  reducers: {
    // startTimer(state, action) {
    //   state.timer = action.payload;
    //   return state;
    // },
  },
});

export default quizTimerSlice;

// export const { startTimer } = quizTimerSlice.actions;
