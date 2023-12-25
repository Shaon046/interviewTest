import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import QuestionnairePage from "./pages/Questions";
import StartConfirmation from "./pages/StartConfirmation";
import ProtectPage from "./pages/components/ProtectPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";
import { useState } from "react";

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

console.log(user,"this is usser")

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
