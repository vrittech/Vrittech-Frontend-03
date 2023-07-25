import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function logoutHandler() {
    sessionStorage.setItem("isLoggedIn", false);
    navigate("/");
  }
  return (
    <div>
      This is my home landing page Home
      <button className="btn btn-secondary" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Home;
