import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserState from "./context/UserState.tsx";
import LoginState from "./context/LoginState.tsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginState>
        <App />
      </LoginState>
    </BrowserRouter>
  </React.StrictMode>
);
