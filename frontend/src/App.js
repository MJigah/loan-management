import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import RequestLoan from "./pages/RequestLoan.jsx";
import Comment from "./pages/Comment.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/loan" element={<RequestLoan />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
