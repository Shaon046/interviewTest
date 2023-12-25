import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestions } from "../../api/firebaseFunctions";

const quizInitialState = {
  timer: 0,
  timeOut: false,
  status: "",
  questions: '',
};

export const getQuestion = createAsyncThunk("getQuestion", async () => {
  const questions=await getQuestions()
  
  return questions;
});

const quizSlice = createSlice({
  name: "quizTimer",
  initialState: quizInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestion.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
      })
      .addCase(getQuestion.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default quizSlice;

// export const { startTimer } = quizTimerSlice.actions;
