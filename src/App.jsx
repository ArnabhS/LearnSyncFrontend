import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./const/Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatBotPage from "./pages/ChatBotPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUserSession } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={user ? <ChatBotPage /> : <Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
