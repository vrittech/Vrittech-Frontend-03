import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

interface LoginInterface {
  isLoggedIn: boolean;
  jwt: string;
}

const GlobalState = (props: any) => {
  const [loginState, setIsLoginState] = useState<LoginInterface>({
    isLoggedIn: false,
    jwt: "",
  });

  useEffect(() => {
    const localData = localStorage.getItem("isLoggedInObj");
    if (localData !== null) {
      const isLoggedInObj = JSON.parse(localData);
      setIsLoginState(isLoggedInObj);
    }
  }, []);

  const setIsLoggedIn = (jwt: string) => {
    const data = {
      isLoggedIn: true,
      jwt,
    };
    localStorage.setItem("isLoggedInObj", JSON.stringify(data));
    setIsLoginState(data);
  };
  return (
    <GlobalContext.Provider value={{ loginState, setIsLoggedIn }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
