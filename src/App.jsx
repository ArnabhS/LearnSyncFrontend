import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./const/Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatBotPage from "./pages/ChatBotPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<ChatBotPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
