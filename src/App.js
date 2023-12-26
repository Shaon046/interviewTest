import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import QuestionnairePage from "./pages/Questions";
import StartConfirmation from "./pages/StartConfirmation";
import ProtectPage from "./pages/components/ProtectPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";
import { useState } from "react";
import { getUser } from "./api/firebaseFunctions";
import { useDispatch } from "react-redux";
import { getQuestion } from "./rudux/slices/QuizSlice";
import { useEffect } from "react";
import { getUserDetais } from "./rudux/slices/AuthenticationSlice";



function App() {
  const [user, setUser] = useState(null);
  const [userDetails,setUserDetails]=useState()
  const dispatch = useDispatch();
  
///////it will check if user
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.displayName);
    } else {
      setUser(null);
    }
  });


 //





  //////////adding questions
  //addQuestions()
  //////////adding questions

  //////loading questions/////
  useEffect(() => {
    dispatch(getQuestion());
    getUser(user).then((userDetails)=>setUserDetails(userDetails))
  }, [dispatch,user]);
  dispatch(getUserDetais(userDetails))
  







  /////get user details


////currently working
 

 



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={user ? <QuestionnairePage /> : <LoginPage />}
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
