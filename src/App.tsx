// Pages imports
import GetStarted from "./pages/auth/GetStarted";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import ForgetPass from "./pages/auth/ForgetPass";
import Otp from "./pages/auth/Otp";
import NewPass from "./pages/auth/NewPass";
import Done from "./components/auth/Done";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forget-pass" element={<ForgetPass />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/new-pass" element={<NewPass />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  );
};

export default App;
