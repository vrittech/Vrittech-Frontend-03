import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// 1. Wrap main application with Browser Router which is imported from react-router-dom
// 2. Wrap main application with  Routes which is also imported from react-router-dom
// 3. Write path and element name in Route which is also imported from react-router-dom
