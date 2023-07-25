import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NoPageFound from "./pages/NoPageFound";
import { ToastContainer } from "react-toastify";
import SecureRoute from "./routes/SecureRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="" element={<SecureRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="counter" element={<Counter />} />
          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
