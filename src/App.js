import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import QuestionnairePage from "./pages/Questions";
import StartConfirmation from "./pages/StartConfirmation";
import ProtectPage from "./pages/components/ProtectPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";
import { useState } from "react";
import { addQuestions ,getQuestions} from "./api/firebaseFunctions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getQuestion } from "./rudux/slices/QuizSlice";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  ///////it will check if user
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.displayName);
    } else {
      setUser(null);
    }
  });


//////////adding questions
//addQuestions()
//////////adding questions


//////loading questions/////

const dispatch=useDispatch()
useEffect(() => {
  
  dispatch(getQuestion());
}, [dispatch]);


getQuestions()
console.log(user,"this is user from app.js")

// const state=useSelector(state=>state)

// console.log(state, "from app.js state")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={user ? <QuestionnairePage /> : <LoginPage />}
        ></Route>
        <Route path="/" element={<ProtectPage />}>
          <Route path="/assesment" element={<QuestionnairePage />} />
        </Route>

        <Route path="/start" element={<StartConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
