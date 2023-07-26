import { useState } from "react";
import LoginContext from "./LoginContext";

const LoginState = (props: any) => {
  const [loggedInData, setLoggedInData] = useState({
    isLoggedIn: false,
    jwt: "",
  });

  function setLoggedInUser(jwt: string) {
    setLoggedInData({
      isLoggedIn: true,
      jwt,
    });
  }
  return (
    <LoginContext.Provider value={{ a: "abc", b: 1 }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;
